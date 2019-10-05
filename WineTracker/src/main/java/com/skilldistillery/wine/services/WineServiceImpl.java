package com.skilldistillery.wine.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.wine.entities.Wine;
import com.skilldistillery.wine.entities.Winery;
import com.skilldistillery.wine.repositories.WineRepository;
import com.skilldistillery.wine.repositories.WineryRepository;

@Service
public class WineServiceImpl implements WineService {

	@Autowired
	private WineRepository repo;
	
	@Autowired
	private WineryRepository wineryrepo;

	@Override
	public List<Wine> findAll() {
		return repo.findAll();
	}

	public Wine findByWineId(Integer id) {
		return repo.findById(id).get();
	}

	@Override
	public Wine addWine(Wine wine) {
		Winery w = wineryrepo.findByName(wine.getWinery().getName());
		if (w != null) {
			wine.setWinery(w);
		}
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
		Wine w = repo.findById(id).get();
			wine.setWinery(w.getWinery());
		
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

	@Override
	public List<Wine> findByPriceBetween(double low, double high) {
		return repo.findByPriceBetween(low, high);
	}

	@Override
	public List<Wine> findByWinery_NameLike(String name) {
		String nameContains = "%" + name + "%";
		List<Wine> wines = repo.findByWinery_NameLike(nameContains);
		return wines;
	}

	@Override
	public List<Wine> findByTypeLike(String type) {
		String typeContains = "%" + type + "%";
		List<Wine> wines = repo.findByTypeLike(typeContains);
		return wines;
	}
	
	
}
