<?php
declare(strict_types=1);

namespace App\Test\TestCase\Model\Table;

use App\Model\Table\EnderecosTable;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\EnderecosTable Test Case
 */
class EnderecosTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\EnderecosTable
     */
    protected $Enderecos;

    /**
     * Fixtures
     *
     * @var array
     */
    protected $fixtures = [
        'app.Enderecos',
        'app.Clientes',
        'app.Administradors',
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
        $config = $this->getTableLocator()->exists('Enderecos') ? [] : ['className' => EnderecosTable::class];
        $this->Enderecos = $this->getTableLocator()->get('Enderecos', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown(): void
    {
        unset($this->Enderecos);

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

    /**
     * Test genarateAdressArray method
     *
     * @return void
     */
    public function testGenarateAdressArray(): void
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
