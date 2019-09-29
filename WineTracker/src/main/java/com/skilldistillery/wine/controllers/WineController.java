package com.skilldistillery.wine.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.wine.entities.Wine;
import com.skilldistillery.wine.repositories.WineRepository;
import com.skilldistillery.wine.services.WineService;

@RequestMapping("api")
@RestController
public class WineController {
	
	
	@Autowired
	private WineService ws;

	@Autowired
	private WineRepository repo;

	@GetMapping("wines/{id}")
	public Wine findByWineId(@PathVariable("id") Integer id) {
		return ws.findByWineId(id);
	}

	@GetMapping("wines")
	public List<Wine> allWines() {
		List<Wine> wines = repo.findAll();
		return wines;
	}



}
