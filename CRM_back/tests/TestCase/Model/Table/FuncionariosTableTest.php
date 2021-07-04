<?php
declare(strict_types=1);

namespace App\Test\TestCase\Model\Table;

use App\Model\Table\FuncionariosTable;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\FuncionariosTable Test Case
 */
class FuncionariosTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\FuncionariosTable
     */
    protected $Funcionarios;

    /**
     * Fixtures
     *
     * @var array
     */
    protected $fixtures = [
        'app.Funcionarios',
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
        $config = $this->getTableLocator()->exists('Funcionarios') ? [] : ['className' => FuncionariosTable::class];
        $this->Funcionarios = $this->getTableLocator()->get('Funcionarios', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown(): void
    {
        unset($this->Funcionarios);

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
}
