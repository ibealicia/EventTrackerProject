package com.skilldistillery.wine.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.wine.entities.Winery;
import com.skilldistillery.wine.repositories.WineryRepository;
import com.skilldistillery.wine.services.WineryService;

@RequestMapping("api")
@RestController
public class WineryController {
	
	@Autowired
	private WineryService ws;

	@Autowired
	private WineryRepository repo;

	@GetMapping("wineries/{id}")
	public Winery findByWineryId(@PathVariable("id") Integer id) {
		return ws.findByWineryId(id);
	}

	@GetMapping("wineries")
	public List<Winery> allWineries() {
		List<Winery> wineries = repo.findAll();
		return wineries;
	}

}
