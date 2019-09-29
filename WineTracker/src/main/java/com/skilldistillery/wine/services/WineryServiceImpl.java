package com.skilldistillery.wine.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.wine.entities.Wine;
import com.skilldistillery.wine.entities.Winery;
import com.skilldistillery.wine.repositories.WineryRepository;

@Service
public class WineryServiceImpl implements WineryService {
	
	@Autowired
	private WineryRepository repo;
	
	public Winery findByWineryId(Integer id){
		return repo.findById(id).get();
	}


}
