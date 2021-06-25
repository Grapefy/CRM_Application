<?php
declare(strict_types=1);

namespace App\Test\TestCase\Model\Table;

use App\Model\Table\CargosTable;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\CargosTable Test Case
 */
class CargosTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\CargosTable
     */
    protected $Cargos;

    /**
     * Fixtures
     *
     * @var array
     */
    protected $fixtures = [
        'app.Cargos',
        'app.Setors',
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
        $config = $this->getTableLocator()->exists('Cargos') ? [] : ['className' => CargosTable::class];
        $this->Cargos = $this->getTableLocator()->get('Cargos', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown(): void
    {
        unset($this->Cargos);

        parent::tearDown();
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault(): void
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test buildRules method
     *
     * @return void
     */
    public function testBuildRules(): void
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
