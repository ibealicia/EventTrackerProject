package com.skilldistillery.wine.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.wine.entities.Winery;

@RunWith(SpringRunner.class)
@SpringBootTest
public class WineryRepositoryTest {


	@Autowired
	private WineryRepository repo;

	@Test
	@DisplayName("test Winery findAll")
	public void test1() {
		List<Winery> wineries = repo.findAll();
		assertNotNull(wineries);
		assertTrue(wineries.size() > 0);
	}

	@Test
	@DisplayName("test Post findById")
	public void test2() {
		Optional<Winery> opt = repo.findById(1);

		if (opt.isPresent()) {
			Winery winery = opt.get();
			assertEquals("The Winery at Holy Cross Abbey", winery.getName());
		}
	}

}