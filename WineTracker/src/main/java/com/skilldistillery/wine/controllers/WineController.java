package com.skilldistillery.wine.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.wine.entities.Wine;
import com.skilldistillery.wine.services.WineService;

@RequestMapping("api")
@RestController
@CrossOrigin({ "*", "http://localhost:4203" })
public class WineController {

	@Autowired
	private WineService ws;

	@GetMapping("wines/{id}")
	public Wine findByWineId(@PathVariable("id") Integer id) {
		return ws.findByWineId(id);
	}

	@GetMapping("wines")
	public List<Wine> allWines() {
		List<Wine> wines = ws.findAll();
		return wines;
	}

	@PostMapping("wines")
	public Wine addWine(@RequestBody Wine wine, HttpServletRequest req, HttpServletResponse resp) {
		try {
			ws.addWine(wine);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/");
			url.append(wine.getId());
			resp.setHeader("Location", url.toString());
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}
		return wine;

	}

	@PutMapping("wines/{id}")
	public Wine updateWine(@PathVariable("id") Integer id, @RequestBody Wine wine, HttpServletRequest req,
			HttpServletResponse resp) {

		try {
			wine = ws.updateWine(id, wine);
			if (wine == null) {
				resp.setStatus(404);
			}

		} catch (Exception e) {
			resp.setStatus(400);
			wine = null;
			e.printStackTrace();
		}
		return wine;
	}

	@DeleteMapping("wines/{id}")
	public void delete(@PathVariable("id") Integer id, HttpServletResponse resp) {
		try {
			Boolean deleted = ws.deleteWine(id);
			if (deleted) {
				resp.setStatus(204);
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
	}

	@GetMapping("wines/name/{name}")
	public List<Wine> findByWineryName(@PathVariable("name") String name) {
		return ws.findByWinery_NameLike(name);
	}

	@GetMapping("wines/type/{type}")
	public List<Wine> findByType(@PathVariable("type") String type) {
		return ws.findByTypeLike("cabernet");
	}
	
	@GetMapping("wines/price/{low}/{high}")
	public List<Wine> findWinesByPrice(@PathVariable("low") Double low,@PathVariable("high") Double high) {
		return ws.findByPriceBetween(low, high);
	}

}
