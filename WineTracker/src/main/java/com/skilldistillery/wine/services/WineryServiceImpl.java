package com.skilldistillery.wine.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.wine.entities.Wine;
import com.skilldistillery.wine.entities.Winery;
import com.skilldistillery.wine.repositories.WineryRepository;

@Service
public class WineryServiceImpl implements WineryService {
	
	@Autowired
	private WineryRepository repo;
	
	public List<Winery> findAll(){
		return repo.findAll();
	}
	public Winery findByWineryId(Integer id){
		return repo.findById(id).get();
	}
	@Override
	public Winery addWinery(Winery winery) {
		try {
			repo.saveAndFlush(winery);
		} catch (Exception e) {
			e.printStackTrace();
			winery = null;
		}
		return winery;
	}
	@Override
	public Winery updateWinery(Integer id, Winery winery) {
		winery.setId(id);
		return repo.saveAndFlush(winery);
	}
	@Override
	public Boolean deleteWinery(Integer id) {
		Boolean deleted = false;
		if (repo.existsById(id)) {
			repo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}


}
