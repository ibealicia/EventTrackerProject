package com.skilldistillery.wine.services;

import java.util.List;

import com.skilldistillery.wine.entities.Winery;

public interface WineryService {
	
	List<Winery> findAll();
	Winery findByWineryId(Integer id);
	Winery addWinery(Winery winery);
	Winery updateWinery(Integer id, Winery winery);
	Boolean deleteWinery(Integer id);

}
