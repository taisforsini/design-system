# Design System

Design System construído para um TCC de MBA (USP/Esalq). A ideia central: em vez de recriar botão, input, etc. do zero toda vez que uma tela nova precisa deles, ter um conjunto de componentes React já prontos, seguindo um padrão visual único.

## Estrutura

src/
components/ - os componentes do sistema (Button, Input, Checkbox, Select, Badge, Card, Modal, Tabs, Table)
pages/
FormularioDS/ - versão da tela de cadastro usando os componentes do Design System
FormularioPuro/ - a mesma tela, construída sem nenhum componente daqui
App.tsx
Comparison.tsx - tela que compara as duas versões lado a lado
main.tsx

A organização segue o Atomic Design: os componentes mais simples (Button, Input, Checkbox, Select) vêm primeiro, e os mais complexos são montados em cima deles.

## Rodando local

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Licença

Projeto acadêmico, sem licença específica definida ainda.
