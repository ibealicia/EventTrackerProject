package com.skilldistillery.wine.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class WineryTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Winery winery;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("WinePU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		winery = em.find(Winery.class, 1);
		
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		winery = null;
	}

	@Test
	@DisplayName("test valid Winery class")
	void test1() {
		assertNotNull(winery);
		assertEquals("The Winery at Holy Cross Abbey", winery.getName());
	}
	
	@Test
	@DisplayName("testing Wine mapping")
	public void test2() {
		assertTrue(winery.getWines().size() > 0);
	}

}
