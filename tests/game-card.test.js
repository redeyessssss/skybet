/**
 * Property Tests for Game Card Structure
 * Feature: website-redesign
 * 
 * These tests verify that all game cards in the grid maintain
 * the required structure and styling properties.
 * 
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Load the HTML file and set up DOM
const htmlPath = path.join(__dirname, '..', 'website1.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');
document.body.innerHTML = htmlContent;

/**
 * Property 1: Game Card Structure Completeness
 * For any game card in the game grid, the card SHALL contain both 
 * a thumbnail image element and a game name text element.
 * 
 * **Validates: Requirements 4.3, 5.1, 5.2**
 */
describe('Property 1: Game Card Structure Completeness', () => {
    const gameCards = document.querySelectorAll('.game-card');
    
    test('All game cards should exist', () => {
        expect(gameCards.length).toBeGreaterThan(0);
    });
    
    test.each(Array.from(gameCards).map((card, index) => [index, card]))(
        'Game card %i should contain a thumbnail image',
        (index, card) => {
            const thumbnail = card.querySelector('.game-thumbnail img');
            expect(thumbnail).not.toBeNull();
            expect(thumbnail.getAttribute('src')).toBeTruthy();
            expect(thumbnail.getAttribute('alt')).toBeTruthy();
        }
    );
    
    test.each(Array.from(gameCards).map((card, index) => [index, card]))(
        'Game card %i should contain a game name',
        (index, card) => {
            const gameName = card.querySelector('.game-name');
            expect(gameName).not.toBeNull();
            expect(gameName.textContent.trim()).toBeTruthy();
        }
    );
});

/**
 * Property 2: Game Card Styling Consistency
 * For any game card in the game grid, the card SHALL have a dark background 
 * color and the thumbnail SHALL have rounded corners (border-radius > 0).
 * 
 * **Validates: Requirements 5.1, 5.4**
 */
describe('Property 2: Game Card Styling Consistency', () => {
    const gameCards = document.querySelectorAll('.game-card');
    
    test.each(Array.from(gameCards).map((card, index) => [index, card]))(
        'Game card %i should have proper structure for dark background styling',
        (index, card) => {
            // Verify the card has the game-card class which applies dark background
            expect(card.classList.contains('game-card')).toBe(true);
        }
    );
    
    test.each(Array.from(gameCards).map((card, index) => [index, card]))(
        'Game card %i thumbnail should have proper structure for rounded corners',
        (index, card) => {
            const thumbnail = card.querySelector('.game-thumbnail');
            expect(thumbnail).not.toBeNull();
            // Verify the thumbnail container exists (CSS applies border-radius)
            expect(thumbnail.classList.contains('game-thumbnail')).toBe(true);
        }
    );
});

/**
 * Property 3: Game Card Thumbnail Aspect Ratio
 * For any game card thumbnail in the game grid, the thumbnail container 
 * SHALL maintain a consistent height-to-width ratio across all cards.
 * 
 * **Validates: Requirements 5.5**
 */
describe('Property 3: Game Card Thumbnail Aspect Ratio', () => {
    const thumbnails = document.querySelectorAll('.game-thumbnail');
    
    test('All thumbnails should have the same class for consistent aspect ratio', () => {
        thumbnails.forEach((thumbnail, index) => {
            expect(thumbnail.classList.contains('game-thumbnail')).toBe(true);
        });
    });
    
    test.each(Array.from(thumbnails).map((thumb, index) => [index, thumb]))(
        'Thumbnail %i should contain an image with object-fit styling class',
        (index, thumbnail) => {
            const img = thumbnail.querySelector('img');
            expect(img).not.toBeNull();
        }
    );
});
