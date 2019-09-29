package com.skilldistillery.wine.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.wine.entities.Winery;
import com.skilldistillery.wine.services.WineryService;

@RequestMapping("api")
@RestController
public class WineryController {

	@Autowired
	private WineryService ws;

	@GetMapping("wineries/{id}")
	public Winery findByWineryId(@PathVariable("id") Integer id) {
		return ws.findByWineryId(id);
	}

	@GetMapping("wineries")
	public List<Winery> allWineries() {
		List<Winery> wineries = ws.findAll();
		return wineries;
	}

	@PostMapping("wineries")
	public Winery addWinery(@RequestBody Winery winery, HttpServletRequest req, HttpServletResponse resp) {
		try {
			ws.addWinery(winery);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/");
			url.append(winery.getId());
			resp.setHeader("Location", url.toString());
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}
		return winery;
	}

	@PutMapping("wineries/{id}")
	public Winery updateWinery(@PathVariable("id") Integer id, @RequestBody Winery winery, HttpServletRequest req,
			HttpServletResponse resp) {

		try {
			winery = ws.updateWinery(id, winery);
			if (winery == null) {
				resp.setStatus(404);
			}

		} catch (Exception e) {
			resp.setStatus(400);
			winery = null;
			e.printStackTrace();
		}
		return winery;
	}

	@DeleteMapping("wineries/{id}")
	public void delete(@PathVariable("id") Integer id, HttpServletResponse resp) {
		try {
			Boolean deleted = ws.deleteWinery(id);
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
}
