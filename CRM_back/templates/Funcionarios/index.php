<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Funcionario[]|\Cake\Collection\CollectionInterface $funcionarios
 */
?>
<div class="funcionarios index content">
    <?= $this->Html->link(__('New Funcionario'), ['action' => 'add'], ['class' => 'button float-right']) ?>
    <h3><?= __('Funcionarios') ?></h3>
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th><?= $this->Paginator->sort('id_funcionario') ?></th>
                    <th><?= $this->Paginator->sort('nome') ?></th>
                    <th><?= $this->Paginator->sort('dt_nascimento') ?></th>
                    <th><?= $this->Paginator->sort('email') ?></th>
                    <th><?= $this->Paginator->sort('fone') ?></th>
                    <th><?= $this->Paginator->sort('created') ?></th>
                    <th><?= $this->Paginator->sort('modified') ?></th>
                    <th class="actions"><?= __('Actions') ?></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($funcionarios as $funcionario): ?>
                <tr>
                    <td><?= $this->Number->format($funcionario->id_funcionario) ?></td>
                    <td><?= h($funcionario->nome) ?></td>
                    <td><?= h($funcionario->dt_nascimento) ?></td>
                    <td><?= h($funcionario->email) ?></td>
                    <td><?= h($funcionario->fone) ?></td>
                    <td><?= h($funcionario->created) ?></td>
                    <td><?= h($funcionario->modified) ?></td>
                    <td class="actions">
                        <?= $this->Html->link(__('View'), ['action' => 'view', $funcionario->id_funcionario]) ?>
                        <?= $this->Html->link(__('Edit'), ['action' => 'edit', $funcionario->id_funcionario]) ?>
                        <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $funcionario->id_funcionario], ['confirm' => __('Are you sure you want to delete # {0}?', $funcionario->id_funcionario)]) ?>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->first('<< ' . __('first')) ?>
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
            <?= $this->Paginator->last(__('last') . ' >>') ?>
        </ul>
        <p><?= $this->Paginator->counter(__('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')) ?></p>
    </div>
</div>
