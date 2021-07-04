<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Funcionario $funcionario
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('Edit Funcionario'), ['action' => 'edit', $funcionario->id_funcionario], ['class' => 'side-nav-item']) ?>
            <?= $this->Form->postLink(__('Delete Funcionario'), ['action' => 'delete', $funcionario->id_funcionario], ['confirm' => __('Are you sure you want to delete # {0}?', $funcionario->id_funcionario), 'class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('List Funcionarios'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('New Funcionario'), ['action' => 'add'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="funcionarios view content">
            <h3><?= h($funcionario->id_funcionario) ?></h3>
            <table>
                <tr>
                    <th><?= __('Nome') ?></th>
                    <td><?= h($funcionario->nome) ?></td>
                </tr>
                <tr>
                    <th><?= __('Email') ?></th>
                    <td><?= h($funcionario->email) ?></td>
                </tr>
                <tr>
                    <th><?= __('Fone') ?></th>
                    <td><?= h($funcionario->fone) ?></td>
                </tr>
                <tr>
                    <th><?= __('Id Funcionario') ?></th>
                    <td><?= $this->Number->format($funcionario->id_funcionario) ?></td>
                </tr>
                <tr>
                    <th><?= __('Dt Nascimento') ?></th>
                    <td><?= h($funcionario->dt_nascimento) ?></td>
                </tr>
                <tr>
                    <th><?= __('Created') ?></th>
                    <td><?= h($funcionario->created) ?></td>
                </tr>
                <tr>
                    <th><?= __('Modified') ?></th>
                    <td><?= h($funcionario->modified) ?></td>
                </tr>
            </table>
        </div>
    </div>
</div>
