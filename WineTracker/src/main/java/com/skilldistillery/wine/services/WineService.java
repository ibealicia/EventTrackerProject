package com.skilldistillery.wine.services;

import java.util.List;

import com.skilldistillery.wine.entities.Wine;

public interface WineService {
	
	List<Wine> findAll();
	Wine findByWineId(Integer id);
	Boolean deleteWine(Integer id);
	Wine addWine(Wine wine);
	Wine updateWine(Integer id, Wine wine);

}
