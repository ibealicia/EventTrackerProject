package com.skilldistillery.wine.services;

import com.skilldistillery.wine.entities.Winery;

public interface WineryService {
	
	Winery findByWineryId(Integer id);

}
