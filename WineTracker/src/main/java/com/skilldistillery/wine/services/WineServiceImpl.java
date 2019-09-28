package com.skilldistillery.wine.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.wine.repositories.WineRepository;

@Service
public class WineServiceImpl implements WineService {
	
	@Autowired
	private WineRepository repo;

}
