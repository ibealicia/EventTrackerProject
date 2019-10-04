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

import com.skilldistillery.wine.entities.Wine;

@RunWith(SpringRunner.class)
@SpringBootTest
public class WineRepositoryTest {


	@Autowired
	private WineRepository repo;

	@Test
	@DisplayName("test Wine findAll")
	public void test1() {
		List<Wine> wines = repo.findAll();
		assertNotNull(wines);
		assertTrue(wines.size() > 0);
	}

	@Test
	@DisplayName("test Wine findById")
	public void test2() {
		Optional<Wine> opt = repo.findById(1);

		if (opt.isPresent()) {
			Wine wine = opt.get();
			assertEquals("American Riesling", wine.getName());
		}
	}

	@Test
	@DisplayName("test Wine find by price range")
	public void test3() {
		List<Wine> wines = repo.findByPriceBetween(10.00, 20.00);
		assertNotNull(wines);
		assertTrue(wines.size() > 0);
	}

	@Test
	@DisplayName("test find Wine by winery name")
	public void test4() {
		List<Wine> wines = repo.findByWinery_NameLike("%Holy%");
		assertNotNull(wines);
		assertTrue(wines.size() > 0);
	}

	@Test
	@DisplayName("test find Wine by type")
	public void test5() {
		List<Wine> wines = repo.findByTypeLike("%cabernet%");
		assertNotNull(wines);
		assertTrue(wines.size() > 0);
	}
	
	

}