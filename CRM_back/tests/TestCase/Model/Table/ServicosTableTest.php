<?php
declare(strict_types=1);

namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ServicosTable;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ServicosTable Test Case
 */
class ServicosTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\ServicosTable
     */
    protected $Servicos;

    /**
     * Fixtures
     *
     * @var array
     */
    protected $fixtures = [
        'app.Servicos',
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
        $config = $this->getTableLocator()->exists('Servicos') ? [] : ['className' => ServicosTable::class];
        $this->Servicos = $this->getTableLocator()->get('Servicos', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown(): void
    {
        unset($this->Servicos);

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
