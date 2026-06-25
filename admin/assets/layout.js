const menuItems = [
  { key: 'dashboard', label: '仪表盘', icon: '📊', href: 'dashboard.html' },
  { key: 'activities', label: '活动管理', icon: '🎫', href: 'activities.html' },
  { key: 'operations', label: '首页运营', icon: '🏠', href: 'operations.html' },
  { key: 'orders', label: '订单管理', icon: '📦', href: 'orders.html' },
  { key: 'users', label: '用户管理', icon: '👥', href: 'users.html' },
  { key: 'participants', label: '参与人管理', icon: '📋', href: 'participants.html' },
  { key: 'content', label: '内容管理', icon: '📝', href: 'content.html' },
  { key: 'settings', label: '系统设置', icon: '⚙️', href: 'settings.html' },
];

function renderLayout(activeKey, pageTitle) {
  return `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${pageTitle} - 一城活动后台</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/antd@5.12.2/dist/reset.css">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: #f5f5f5;
        }
        .ant-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          height: 32px;
          padding: 0 15px;
          font-size: 14px;
          border-radius: 6px;
          cursor: pointer;
          border: 1px solid #d9d9d9;
          background: white;
          color: rgba(0,0,0,0.88);
          transition: all 0.2s;
          text-decoration: none;
        }
        .ant-btn:hover {
          border-color: #4096ff;
          color: #4096ff;
        }
        .ant-btn-primary {
          background: #1677ff;
          border-color: #1677ff;
          color: white;
        }
        .ant-btn-primary:hover {
          background: #4096ff;
          border-color: #4096ff;
          color: white;
        }
        .ant-btn-sm { height: 24px; padding: 0 7px; font-size: 14px; }
        .ant-btn-danger { color: #ff4d4f; border-color: #ff4d4f; }
        .ant-btn-danger:hover { border-color: #ff7875; color: #ff7875; }
        .ant-tag {
          display: inline-block;
          padding: 0 7px;
          font-size: 12px;
          line-height: 20px;
          border-radius: 4px;
          border: 1px solid;
        }
        .tag-blue { color: #1677ff; background: #e6f4ff; border-color: #91caff; }
        .tag-green { color: #52c41a; background: #f6ffed; border-color: #b7eb8f; }
        .tag-orange { color: #fa8c16; background: #fff7e6; border-color: #ffd591; }
        .tag-red { color: #ff4d4f; background: #fff1f0; border-color: #ffa39e; }
        .tag-gray { color: #595959; background: #fafafa; border-color: #d9d9d9; }
        .tag-purple { color: #722ed1; background: #f9f0ff; border-color: #d3adf7; }
        .tag-cyan { color: #13c2c2; background: #e6fffb; border-color: #87e8de; }
        .ant-input {
          width: 100%;
          height: 32px;
          padding: 4px 11px;
          font-size: 14px;
          border: 1px solid #d9d9d9;
          border-radius: 6px;
          transition: all 0.2s;
        }
        .ant-input:focus {
          border-color: #4096ff;
          box-shadow: 0 0 0 2px rgba(5,145,255,0.1);
          outline: none;
        }
        .ant-select {
          position: relative;
          display: inline-block;
          width: 100%;
        }
        .ant-select-selector {
          height: 32px;
          padding: 0 11px;
          font-size: 14px;
          border: 1px solid #d9d9d9;
          border-radius: 6px;
          background: white;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .ant-select-selector:hover { border-color: #4096ff; }
        .ant-card {
          background: white;
          border-radius: 8px;
          border: 1px solid #f0f0f0;
        }
        .ant-card-head {
          padding: 0 24px;
          min-height: 56px;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ant-card-head-title {
          font-size: 16px;
          font-weight: 600;
          color: rgba(0,0,0,0.88);
        }
        .ant-card-body { padding: 24px; }
        .ant-table {
          background: white;
          border-radius: 8px;
          overflow: hidden;
        }
        .ant-table table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .ant-table th {
          background: #fafafa;
          padding: 12px 16px;
          font-weight: 500;
          color: rgba(0,0,0,0.88);
          font-size: 14px;
          border-bottom: 1px solid #f0f0f0;
          white-space: nowrap;
        }
        .ant-table td {
          padding: 12px 16px;
          font-size: 14px;
          color: rgba(0,0,0,0.88);
          border-bottom: 1px solid #f0f0f0;
        }
        .ant-table tr:hover td { background: #fafafa; }
        .ant-divider {
          border-top: 1px solid #f0f0f0;
          margin: 16px 0;
        }
        .ant-descriptions {
          border: 1px solid #f0f0f0;
          border-radius: 8px;
          overflow: hidden;
        }
        .ant-descriptions-row {
          display: flex;
        }
        .ant-descriptions-item-label {
          padding: 12px 16px;
          background: #fafafa;
          border-right: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
          color: rgba(0,0,0,0.88);
          font-weight: 500;
          min-width: 120px;
        }
        .ant-descriptions-item-content {
          padding: 12px 16px;
          border-bottom: 1px solid #f0f0f0;
          color: rgba(0,0,0,0.88);
          flex: 1;
        }
        .ant-descriptions-row:last-child .ant-descriptions-item-label,
        .ant-descriptions-row:last-child .ant-descriptions-item-content {
          border-bottom: none;
        }
        .ant-modal-mask {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.45);
          z-index: 1000;
          display: none;
          align-items: center;
          justify-content: center;
        }
        .ant-modal-mask.show { display: flex; }
        .ant-modal {
          background: white;
          border-radius: 8px;
          width: 520px;
          max-width: 90vw;
          max-height: 90vh;
          overflow: auto;
        }
        .ant-modal-header {
          padding: 16px 24px;
          border-bottom: 1px solid #f0f0f0;
        }
        .ant-modal-title {
          font-size: 16px;
          font-weight: 600;
          color: rgba(0,0,0,0.88);
        }
        .ant-modal-body { padding: 24px; }
        .ant-modal-footer {
          padding: 12px 24px;
          border-top: 1px solid #f0f0f0;
          display: flex;
          justify-content: flex-end;
          gap: 8px;
        }
        .pagination {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
        }
        .pagination button {
          min-width: 32px;
          height: 32px;
          padding: 0 8px;
          border: 1px solid #d9d9d9;
          border-radius: 6px;
          background: white;
          cursor: pointer;
          font-size: 14px;
        }
        .pagination button.active {
          border-color: #1677ff;
          color: #1677ff;
        }
        .pagination button:disabled {
          color: #d9d9d9;
          cursor: not-allowed;
        }
        .stat-card {
          background: white;
          border-radius: 8px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .stat-card .stat-value {
          font-size: 30px;
          font-weight: 600;
          color: rgba(0,0,0,0.88);
          line-height: 1.2;
          margin-bottom: 4px;
        }
        .stat-card .stat-label {
          font-size: 14px;
          color: rgba(0,0,0,0.65);
          margin-bottom: 8px;
        }
        .stat-card .stat-trend {
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .stat-card .stat-trend.up { color: #ff4d4f; }
        .stat-card .stat-trend.down { color: #52c41a; }
        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: 500;
        }
        .avatar-lg {
          width: 64px;
          height: 64px;
          font-size: 20px;
        }
      </style>
    </head>
    <body>
      <div class="flex min-h-screen">
        <!-- 左侧导航 -->
        <aside class="w-60 bg-white border-r border-gray-200 flex-shrink-0">
          <div class="h-16 flex items-center px-5 border-b border-gray-200">
            <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">城</div>
            <span class="text-lg font-semibold text-gray-800">一城活动后台</span>
          </div>
          <nav class="py-3">
            ${menuItems.map(item => `
              <a href="${item.href}" class="flex items-center px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${activeKey === item.key ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : ''}">
                <span class="mr-3">${item.icon}</span>
                <span>${item.label}</span>
              </a>
            `).join('')}
          </nav>
        </aside>
        <!-- 右侧主区域 -->
        <div class="flex-1 flex flex-col">
          <!-- 顶部栏 -->
          <header class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
            <div class="text-base font-medium text-gray-800">${pageTitle}</div>
            <div class="flex items-center gap-4">
              <span class="text-sm text-gray-500">管理员</span>
              <div class="avatar">管</div>
            </div>
          </header>
          <!-- 内容区 -->
          <main class="flex-1 p-6 overflow-auto">
            <div id="page-content"></div>
          </main>
        </div>
      </div>
    </body>
    </html>
  `;
}

function initPage(activeKey, pageTitle, contentHtml) {
  document.documentElement.innerHTML = renderLayout(activeKey, pageTitle);
  document.getElementById('page-content').innerHTML = contentHtml;
}
