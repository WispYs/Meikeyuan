// 应用系统管理
export const AppTableConfig = {
  /**
   * 这种表格配置表对整个项目而言耦合性较高，后续每次对表格有特殊要求都需要修改
   * 而且由于某些字段需要前端方法处理，所以这个配置也应由前端定义交给后端，然后再通过接口动态调用
   *
   * @param {array}   actions           操作按钮，例如：['preview', 'edit', 'delete', 'upload', 'other']
   * @param {string}  otherActionTitle  其他特定操作按钮文本
   * @param {boolean} summary           是否需要合计数据
   * @param {array}   summaryField      合计字段
   * @param {boolean} inlineEdit        是否支持在表格行内直接编辑，默认不支持且编辑为弹窗形式
   * @param {array}   columns           每列参数
   * @param {boolean} sortable          是否需要排序
   * @param {string}  align             单元表格对齐方向，默认为'center'
   * @param {string}  unit              字段单位，例如：元、kw/h
   * @param {string}  layout            表单类型
   * @param {string}  dateFormat        日期格式
   * @param {array}   options           选择器配置项
   * @param {string}  showType          表格内数据显示方式，属于对展现形式有特殊要求的配置项，例如：colorLump 色块显示
   * @param {string}  rowKey            行数据的key，渲染树形表格必填，一般选唯一字段 id
  */
  actions: ['edit', 'delete'],
  columns: [
    { label: '站点名称', field: 'name', width: '200', layout: 'Text', placeholder: '请填写站点名称' },
    { label: '站点地址', field: 'url', width: '200', layout: 'Text', placeholder: '请填写站点地址' },
    { label: '所属部门', field: 'department', width: '200', layout: 'TreeSelect',
      options: [
        {
          value: 1,
          label: '顾桥矿',
          children: [
            { value: 2, label: '机关', children: [
              { value: 3, label: '矿领导' },
              { value: 4, label: '办公室', children: [
                { value: 5, label: '部门' },
                { value: 6, label: '办公室科室（中央区）' }
              ] },
              { value: 7, label: '人力资源部' }
            ] }
          ]
        }
      ], placeholder: '请选择所属部门' },
    { label: '排序', field: 'sort', width: '150', layout: 'Text', placeholder: '请选择排序' },
    { label: '备注', field: 'remark', width: '', layout: 'Textarea', placeholder: '请填写备注' }
  ]
}

export const AppFilterConfig = {
  /**
   * @param {array} actions   操作按钮
   * @param {array} filters   筛选项
   * @param {array} options   选择器配置项
   */
  actions: ['search', 'reset', 'create'],
  filters: [
    { label: '站点名称', field: 'name', width: '220', layout: 'Text', placeholder: '请输入站点名称' }
  ]
}

// 用户管理
export const UserTableConfig = {
  actions: ['edit', 'delete'],
  columns: [
    { label: '登录名', field: 'loginName', width: '90', layout: 'Text', placeholder: '请填写登录名' },
    { label: '姓名', field: 'userName', width: '90', layout: 'Text', placeholder: '请填写姓名' },
    { label: '手机', field: 'mobile', width: '110', layout: 'Text', placeholder: '请填写手机号码' },
    { label: '部门', field: 'department', layout: 'Text', placeholder: '请填写部门' },
    { label: '职务', field: 'position', width: '90', layout: 'Select',
      options: [
        { value: '技术员', label: '技术员' },
        { value: '班长', label: '班长' },
        { value: '科长', label: '科长' },
        { value: '副科长', label: '副科长' },
        { value: '副班长', label: '副班长' }
      ], placeholder: '请选择职务' },
    { label: '岗位工种', field: 'workType', layout: 'Select',
      options: [
        { value: 'G203工程师', label: 'G203工程师' },
        { value: 'Z0324副科长', label: 'Z0324副科长' },
        { value: 'G031科长', label: 'G031科长' },
        { value: 'T0321班长', label: 'T0321班长' },
        { value: 'Z0630副班长', label: 'Z0630副班长' }
      ], placeholder: '请选择职务' },
    { label: '角色', field: 'role', layout: 'Select',
      options: [
        { value: '影响单位审核', label: '影响单位审核' },
        { value: '科技创新', label: '科技创新' }
      ], placeholder: '请选择角色' },
    { label: '状态', field: 'status', width: '70', layout: 'Switch',
      options: [
        { value: true, label: '已审核' },
        { value: false, label: '待审核' }
      ], placeholder: '请选择状态' }

  ]
}

export const UserFilterConfig = {
  actions: ['search', 'reset', 'create'],
  filters: [
    { label: '关键字', field: 'name', width: '220', layout: 'Text', placeholder: '工号、姓名、登录名' }
  ]
}

// 组织机构管理
export const OrganTableConfig = {
  actions: ['edit', 'delete'],
  rowKey: 'num',
  columns: [
    { label: '名称', field: 'name', layout: 'Text', placeholder: '请填写名称' },
    { label: '编号', field: 'num', layout: 'Text', placeholder: '请填写编号' },
    { label: '简称', field: 'abbreviation', layout: 'Text', placeholder: '请填写简称' },
    { label: '类型', field: 'type', layout: 'Select',
      options: [
        { value: 1, label: '井工矿' },
        { value: 2, label: '矿机构' },
        { value: 3, label: '职务' }
      ], placeholder: '请填写部门' },
    { label: '排序', field: 'sort', layout: 'Text', placeholder: '请填写排序' },
    { label: '创建日期', field: 'createDate', layout: 'DateTime', placeholder: '请选择创建日期' },
    { label: '备注', field: 'remark', layout: 'Textarea', placeholder: '请填写备注' }

  ]
}

export const OrganFilterConfig = {
  actions: ['search', 'reset', 'create'],
  filters: [
    { label: '关键字', field: 'name', width: '220', layout: 'Text', placeholder: '名称、简称' }
  ]
}

// 角色管理
export const RoleTableConfig = {
  actions: ['edit', 'delete', 'other'],
  otherActionTitle: ['管理成员', '编辑权限'],
  rowKey: 'num',
  columns: [
    { label: '角色名称', field: 'name', layout: 'Text', placeholder: '请填写角色名称' },
    { label: '角色类型', field: 'type', layout: 'Select', options: [
      { value: 1, label: '基础通用' },
      { value: 2, label: '安全管理专业' },
      { value: 3, label: '调度专业' }
    ], placeholder: '请选择角色类型' },
    { label: '所属站点', field: 'site', layout: 'Text', placeholder: '请填写所属站点' },
    { label: '成员数量', field: 'personNum', layout: 'Text', placeholder: '请填写成员数量' },
    { label: '排序', field: 'sort', layout: 'Text', placeholder: '请填写排序' },
    { label: '备注', field: 'remark', layout: 'Textarea', placeholder: '请填写备注' }

  ]
}

export const RoleFilterConfig = {
  actions: ['search', 'reset', 'create'],
  filters: [
    { label: '角色类型', field: 'name', width: '220', layout: 'Select', options: [
      { value: 1, label: '基础通用' },
      { value: 2, label: '安全管理专业' },
      { value: 3, label: '调度专业' }
    ], placeholder: '请选择角色类型' }
  ]
}
