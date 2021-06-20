<?php
declare(strict_types=1);

namespace App\Test\TestCase\Model\Table;

use App\Model\Table\AdministradorsTable;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\AdministradorsTable Test Case
 */
class AdministradorsTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\AdministradorsTable
     */
    protected $Administradors;

    /**
     * Fixtures
     *
     * @var array
     */
    protected $fixtures = [
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
        $config = $this->getTableLocator()->exists('Administradors') ? [] : ['className' => AdministradorsTable::class];
        $this->Administradors = $this->getTableLocator()->get('Administradors', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown(): void
    {
        unset($this->Administradors);

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
