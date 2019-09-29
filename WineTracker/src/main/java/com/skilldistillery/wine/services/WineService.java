package com.skilldistillery.wine.services;

import java.util.List;

import com.skilldistillery.wine.entities.Wine;

public interface WineService {
	
	Wine findByWineId(Integer id);

}
