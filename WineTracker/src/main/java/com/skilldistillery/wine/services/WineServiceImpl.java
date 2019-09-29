package com.skilldistillery.wine.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.wine.entities.Wine;
import com.skilldistillery.wine.repositories.WineRepository;

@Service
public class WineServiceImpl implements WineService {

	@Autowired
	private WineRepository repo;

	@Override
	public List<Wine> findAll() {
		return repo.findAll();
	}

	public Wine findByWineId(Integer id) {
		return repo.findById(id).get();
	}

	@Override
	public Wine addWine(Wine wine) {
		try {
			repo.saveAndFlush(wine);
		} catch (Exception e) {
			e.printStackTrace();
			wine = null;
		}
		return wine;

	}
	@Override
	public Wine updateWine(Integer id, Wine wine) {
		wine.setId(id);
		return repo.saveAndFlush(wine);
	}

	@Override
	public Boolean deleteWine(Integer id) {
		Boolean deleted = false;
		if (repo.existsById(id)) {
			repo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}

}
