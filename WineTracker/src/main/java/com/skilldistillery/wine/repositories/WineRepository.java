package com.skilldistillery.wine.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.wine.entities.Wine;

public interface WineRepository extends JpaRepository<Wine, Integer> {

}
