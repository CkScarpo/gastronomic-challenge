export interface Theme {
  theme: 'light' | 'dark';
  colors: {
    primary: string;
    avatar: string;
    inputSelect: string;
    rowExpand: string;
    headerTable: string;
    textPrimary: string;
    contentBg: string;
    selectMenu: string;
    hover: string;
    hoverMenu: string;
    stepsStatus: string;
    tag: string;
    btnDisable: string;
    btnDanger: string;
    btnEdit: string;
    border: string;
    inputNumber: string;
  };
}

export const darkTheme: Theme = {
  theme: 'dark',
  colors: {
    primary: '#262626',
    avatar: '#000000',
    inputSelect: '#262626',
    rowExpand: '#000',
    headerTable: '#000000',
    textPrimary: '#BFBFBF',
    contentBg: '#000000',
    selectMenu: '#000000',
    hover: '#595959',
    hoverMenu: '#1890ff',
    stepsStatus: '#595959',
    tag: '#000000',
    btnDisable: '#bfbfbf87',
    btnDanger: '#e03c31',
    btnEdit: '#FA8C16',
    border: '#8C8C8C',
    inputNumber: '#fff',
  },
};

export const lightTheme: Theme = {
  theme: 'light',
  colors: {
    primary: '#fff',
    avatar: '#ccc',
    inputSelect: '#fff',
    rowExpand: '#fff',
    headerTable: '#f1f1f1',
    textPrimary: '#595959',
    contentBg: '#f1f1f1',
    selectMenu: '#e8f4f8',
    hover: '#e8f4f8',
    hoverMenu: '#1890ff',
    stepsStatus: '#d3d3d3',
    tag: '#ffbe6',
    btnDisable: '#ffbe6',
    btnDanger: '#ff4d4f',
    btnEdit: '#FA8C16',
    border: '#8C8C8C',
    inputNumber: '#000',
  },
};
