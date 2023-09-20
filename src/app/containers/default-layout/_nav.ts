import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },

  },
  {
    title: true,
    name: 'SECCIÓN DE TRABAJOS'
  },
  {
    name: 'Realizar trabajo',
    url: '/theme/',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Buscar trabajo',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Informes y estadisticas',
    title: true
  },
  {
    name: 'Producción general',
    url: '/theme/',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Clientes',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Noticicaciones y Comunicación',
    title: true
  },
  {
    name: 'Notificaciones',
    url: '/theme/',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Hacer comunicado',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },

  {
    title: true,
    name: 'Capacitación y Soporte',
    class: 'py-0'
  },
  {
    name: 'Tutorial',
    url: 'https://www.youtube.com/watch?v=ms8p9JOErVc',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank', class: '-text-dark' },
    class: 'mt-auto'
  },
  {
    name: 'Contactar Soporte',
    url: 'https://www.youtube.com/watch?v=ms8p9JOErVc',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank', class: '-text-dark' },
    class: 'mt-auto'
  },
  {
    title: true,
    name: 'Login',
    class: 'py-0'
  },
  {
    name: 'Sesión',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Cerrar sesión',
        url: '/login'
      },
 
      {
        name: 'Error 404',
        url: '/404'
      },
    ]
  },
];
