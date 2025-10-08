import { test, expect } from '../fixtures/page-fixtures';

test('Print submenu items under Health Insurance Health', async ({
  healthInsuranceItems
}: {
  healthInsuranceItems: string[];
}) => {
<<<<<<< HEAD
  console.log(' Submenu items under "Health Insurance Health":\n');
=======
  console.log('Submenu items under "Health Insurance Health":\n');
>>>>>>> d88b23ae462eec798e2841956ae3d5ada6429295

  healthInsuranceItems.forEach((item: string, index: number) => {
    console.log(`   ${index + 1}. ${item}`);
  });

  expect(healthInsuranceItems.length).toBeGreaterThan(0);
});