import '@testing-library/jest-dom'
import { describe, test, vi, beforeEach, afterEach, expect } from 'vitest'
import App from "../app"
import { render, screen } from '@testing-library/react'

describe('Test de ejemplo', () => {
    
    beforeEach(() => {

      render(
        <App></App>
      )
    })
  
    afterEach(() => {
      vi.restoreAllMocks()
    })
  
    test('No renderiza el título de la app porque todavía no se creó', () => {
      expect(screen.queryByText("QuickFix")).toBeNull()
    })
})  