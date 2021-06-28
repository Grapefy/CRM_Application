<?php
declare(strict_types=1);

namespace App\Test\TestCase\Model\Table;

use App\Model\Table\SetorsTable;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\SetorsTable Test Case
 */
class SetorsTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\SetorsTable
     */
    protected $Setors;

    /**
     * Fixtures
     *
     * @var array
     */
    protected $fixtures = [
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
        $config = $this->getTableLocator()->exists('Setors') ? [] : ['className' => SetorsTable::class];
        $this->Setors = $this->getTableLocator()->get('Setors', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown(): void
    {
        unset($this->Setors);

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
