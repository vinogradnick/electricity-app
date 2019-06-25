import { Table } from './Table';


let tableName: ({ name: string; disp: string })[];
tableName = [{ name: 'Fider', disp: 'Фидер' },
{ name: 'Fiders', disp: 'Фидер' },
{ name: 'Tps', disp: 'Фидер' },
{ name: 'Sections', disp: 'Фидер' },
{ name: 'Customers', disp: 'Фидер' },
{ name: 'Transformers', disp: 'Фидер' },
{ name: 'Lines', disp: 'Фидер' },
{ name: 'Orders', disp: 'Фидер' },
{ name: 'Wokrloads', disp: 'Фидер' }


];
export const Tables: Table[] = [
  new Table("Fider", 'Фидер',
    [
      {
        name: 'id',
        id: 0,
        disp: 'Идентификатор',
        operator: '',
        value: '',
        selection: false,
        type: 'number',
      },
      {
        name: 'name',
        id: 1,
        disp: 'Наименование',
        operator: '',
        value: '',
        selection: false,
        type: 'text'
      },
      {
        name: 'power',
        id: 2,
        disp: 'Мощность',
        operator: '',
        value: '',
        selection: false,
        type: 'number'

      },
      {
        name: 'voltage',
        id: 3,
        disp: 'Напряжение',
        operator: '',
        value: '',
        selection: false,
        type: 'number'

      },
      {
        name: 'geocode',
        id: 4,
        disp: 'Геопозиция',
        operator: '',
        value: '',
        selection: false,
        type: 'text'

      }
    ]),
  new Table("Tp", "ТП", [{
    name: 'id',
    id: 0,
    disp: 'Идентификатор',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  },
  {
    name: 'name',
    id: 1,
    disp: 'Наименование',
    operator: '',
    value: '',
    selection: false,
    type: 'text'

  },
  {
    name: 'power',
    id: 2,
    disp: 'Мощность',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  },
  {
    name: 'voltage',
    id: 3,
    disp: 'Напряжение',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  },
  {
    name: 'geocode',
    id: 4,
    disp: 'Геопозиция',
    operator: '',
    value: '',
    selection: false,
    type: 'text'

  },
  {
    name: 'fiderId',
    id: 5,
    disp: 'Номер фидера',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  }
  ]),
  new Table("Section", "Секция", [{
    name: 'id',
    id: 0,
    disp: 'Идентификатор',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  },
  {
    name: 'name',
    id: 1,
    disp: 'Наименование',
    operator: '',
    value: '',
    selection: false,
    type: 'text'

  },
  {
    name: 'power',
    id: 2,
    disp: 'Мощность',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  },
  {
    name: 'voltage',
    id: 3,
    disp: 'Напряжение',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  },
  {
    name: 'geocode',
    id: 4,
    disp: 'Геопозиция',
    operator: '',
    value: '',
    selection: false,
    type: 'text'

  },
  {
    name: 'tpId',
    id: 5,
    disp: 'Номер ТП',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  }]),
  new Table("Line", "Электрическая Линия", [{
    name: 'id',
    id: 0,
    disp: 'Идентификатор',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  },
  {
    name: 'name',
    id: 1,
    disp: 'Наименование',
    operator: '',
    value: '',
    selection: false,
    type: 'text'

  },
  {
    name: 'power',
    id: 2,
    disp: 'Мощность',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  },
  {
    name: 'voltage',
    id: 3,
    disp: 'Напряжение',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  },
  {
    name: 'geocode',
    id: 4,
    disp: 'Геопозиция',
    operator: '',
    value: '',
    selection: false,
    type: 'text'

  },
  {
    name: 'sectionId',
    id: 5,
    disp: 'Номер Секции',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  }]),
  new Table("Customer", "Потребитель", [{
    name: 'id',
    id: 0,
    disp: 'Идентификатор',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  },
  {
    name: 'name',
    id: 1,
    disp: 'Наименование',
    operator: '',
    value: '',
    selection: false,
    type: 'text'

  },
  {
    name: 'objectName',
    id: 2,
    disp: 'Наименование объекта',
    operator: '',
    value: '',
    selection: false,
    type: 'text'

  },
  {
    name: 'objectAddress',
    id: 3,
    disp: 'Адрес объекта',
    operator: '',
    value: '',
    selection: false,
    type: 'text'

  },

  {
    name: 'placeInstall',
    id: 6,
    disp: 'Место установки',
    operator: '',
    value: '',
    selection: false,
    type: 'text'

  },
  {
    name: 'status',
    id: 7,
    disp: 'Статус подключения',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  },


  {
    name: 'lineId',
    id: 10,
    disp: 'Номер линии',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  }
  ]),
  new Table("Workload", "Замер нагрузок", [{
    name: 'id',
    id: 0,
    disp: 'Идентификатор',
    operator: '',
    value: '',
    selection: false,
    type: 'number'

  },
  {
    name: 'name',
    id: 1,
    disp: 'Наименование',
    operator: '',
    value: '',
    selection: false,
    type: 'text'

  },
  {
    name: 'date',
    id: 2,
    disp: 'Дата замера',
    operator: '',
    value: '',
    selection: false,
    type: 'text'

  },
  ]),
];
