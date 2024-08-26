
  import { users } from './yourModule';

test('Verifica se Astrodev está presente na lista de usuários', () => {
  const isAstrodevPresent = users.some(user => user.name === 'Astrodev');
  expect(isAstrodevPresent).toBe(true);
});
