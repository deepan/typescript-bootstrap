import { it, describe, vi, afterEach, expect } from 'vitest';
import { sayHello } from '../src/index';

describe('index', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should say hello', async () => {
    expect(sayHello()).equals('Hello world');
  });
});

