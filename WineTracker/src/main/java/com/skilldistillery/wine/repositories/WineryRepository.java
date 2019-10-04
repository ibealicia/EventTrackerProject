package com.skilldistillery.wine.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.wine.entities.Winery;

public interface WineryRepository extends JpaRepository<Winery, Integer> {
	Winery findByName(String name);

}
