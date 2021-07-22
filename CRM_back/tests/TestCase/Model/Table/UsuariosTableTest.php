<?php
declare(strict_types=1);

namespace App\Test\TestCase\Model\Table;

use App\Model\Table\UsuariosTable;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\UsuariosTable Test Case
 */
class UsuariosTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\UsuariosTable
     */
    protected $Usuarios;

    /**
     * Fixtures
     *
     * @var array
     */
    protected $fixtures = [
        'app.Usuarios',
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
        $config = $this->getTableLocator()->exists('Usuarios') ? [] : ['className' => UsuariosTable::class];
        $this->Usuarios = $this->getTableLocator()->get('Usuarios', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown(): void
    {
        unset($this->Usuarios);

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
