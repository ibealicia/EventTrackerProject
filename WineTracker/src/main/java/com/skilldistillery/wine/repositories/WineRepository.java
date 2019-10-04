package com.skilldistillery.wine.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.wine.entities.Wine;

public interface WineRepository extends JpaRepository<Wine, Integer> {
	
	List<Wine> findByPriceBetween(double low, double high);
	List<Wine> findByWinery_NameLike(String name);
	List<Wine> findByTypeLike(String name);
	

}
