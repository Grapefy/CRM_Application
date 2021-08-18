<?php
declare(strict_types=1);

namespace App\Test\TestCase\Model\Table;

use App\Model\Table\PlanosTable;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\PlanosTable Test Case
 */
class PlanosTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\PlanosTable
     */
    protected $Planos;

    /**
     * Fixtures
     *
     * @var array
     */
    protected $fixtures = [
        'app.Planos',
        'app.Tipoplanos',
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
        $config = $this->getTableLocator()->exists('Planos') ? [] : ['className' => PlanosTable::class];
        $this->Planos = $this->getTableLocator()->get('Planos', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown(): void
    {
        unset($this->Planos);

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
