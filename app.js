const steps = [
  {
    key: "name",
    title: "第一步：建立关系档案",
    stepName: "身份绑定",
    label: "真实姓名",
    type: "text",
    placeholder: "例如：张同学",
    validator: "name"
  },
  {
    key: "contact",
    title: "第二步：绑定社交账号",
    stepName: "账号绑定",
    label: "社交账号",
    type: "contact",
    placeholder: ""
  },
  {
    key: "birthday",
    title: "第三步：匹配关系年龄层",
    stepName: "生日匹配",
    label: "出生日期",
    type: "date",
    placeholder: "",
    validator: "date"
  },
  {
    key: "address",
    title: "第四步：定位同城关系圈",
    stepName: "关系圈定位",
    label: "当前位置",
    type: "location",
    placeholder: ""
  },
  {
    key: "photo",
    title: "第五步：上传社交形象照片",
    stepName: "形象分析",
    label: "个人照片",
    type: "file",
    placeholder: ""
  },
  {
    key: "voice",
    title: "第六步：录制沟通语气样本",
    stepName: "语气分析",
    label: "声音样本",
    type: "voice",
    placeholder: ""
  }
];

const reports = [
  {
    type: "暖场型连接者",
    score: "87",
    summary: "你在人群中更容易承担破冰角色，擅长用轻松话题拉近距离。",
    traits: ["同理心高", "回应速度快", "适合小组协作"],
    advice: "在人际压力高的时候，记得给自己留出独处时间。"
  },
  {
    type: "稳定型陪伴者",
    score: "79",
    summary: "你重视长期信任，关系建立速度不快，但一旦确认就会非常可靠。",
    traits: ["边界感清晰", "信任周期长", "适合深度友谊"],
    advice: "遇到新同学时，可以主动表达一次善意，不必等对方先开口。"
  },
  {
    type: "观察型协调者",
    score: "92",
    summary: "你习惯先观察气氛，再选择合适的沟通方式，因此常能缓和冲突。",
    traits: ["情绪识别强", "冲突敏感", "适合团队协调"],
    advice: "不要总把别人的感受放在自己前面，清楚表达需求同样重要。"
  },
  {
    type: "活力型组织者",
    score: "84",
    summary: "你喜欢推动活动和话题，容易成为同伴眼中有行动力的人。",
    traits: ["表达直接", "行动力强", "适合活动策划"],
    advice: "发起邀请时，也给别人拒绝或调整的空间，关系会更舒服。"
  }
];

const testQuestions = [
  { key: "q1", text: "当别人表达和我不同的想法时，我通常能先听完再回应。", type: "scale" },
  { key: "q2", text: "朋友心情低落时，我能察觉并给出合适的回应。", type: "scale" },
  {
    key: "q4",
    text: "【同学默契测试】如果你和同桌闹矛盾，你猜他/她会怎么处理？",
    type: "scale",
    customOptions: ["主动来找我和好", "等我先开口", "假装什么都没发生", "找其他同学帮忙调解"]
  },
  {
    key: "q5",
    text: "【同学默契测试】你的好朋友最不能接受的事情是？",
    type: "scale",
    customOptions: ["被说谎欺骗", "被忽视冷落", "被强迫做不喜欢的事", "在众人面前出丑"]
  },
  {
    key: "q6",
    text: "为计算家庭支持指数，请填写一位家人的姓名、电话和工作单位。",
    type: "trapFields",
    fields: [
      { key: "familyName", label: "家人姓名", placeholder: "例如：王某某", validator: "name" },
      { key: "familyPhone", label: "家人电话", placeholder: "请输入 11 位数字", validator: "phone", inputMode: "numeric", maxLength: 11 },
      { key: "familyWork", label: "工作单位（选填）", placeholder: "例如：某某公司", validator: "shortText", optional: true }
    ]
  },
  {
    key: "q7",
    text: "【同学默契测试】你猜你的好朋友下课最想做的事是什么？",
    type: "scale",
    customOptions: ["找我聊天", "自己安静一会儿", "去买零食", "完成未做完的作业"]
  },
  {
    key: "q8",
    text: "为生成同桌默契指数，请填写你同桌的基本信息。",
    type: "trapFields",
    fields: [
      { key: "deskMateName", label: "同桌姓名", placeholder: "例如：赵同学", validator: "name" },
      { key: "deskMateNick", label: "同桌昵称/外号", placeholder: "例如：小赵、球球", validator: "shortText" },
      { key: "deskMatePhone", label: "同桌手机号（选填）", placeholder: "请输入 11 位数字", validator: "phoneOptional", inputMode: "numeric", maxLength: 11, optional: true }
    ]
  },
  {
    key: "q9",
    text: "【同学默契测试】你觉得你的好朋友认为你们友谊里最珍贵的是什么？",
    type: "scale",
    customOptions: ["互相理解和包容", "一起笑的时光", "在困难时互相支持", "从不评判对方"]
  },
  {
    key: "q10",
    text: "最后一步！为生成你的专属班级人缘图谱，请确认班级并填写两位同学信息。",
    type: "trapFields",
    fields: [
      { key: "school", label: "学校名称", placeholder: "例如：育才中学", validator: "shortText" },
      { key: "classInfo", label: "年级班级", placeholder: "例如：八年级三班", validator: "shortText" },
      { key: "classmate1Name", label: "同学 1 姓名", placeholder: "例如：陈同学", validator: "name" },
      { key: "classmate1Nick", label: "同学 1 昵称/外号", placeholder: "例如：小陈、胖虎", validator: "shortText" },
      { key: "classmate1Phone", label: "同学 1 手机号（选填）", placeholder: "请输入 11 位数字", validator: "phoneOptional", inputMode: "numeric", maxLength: 11, optional: true },
      { key: "classmate2Name", label: "同学 2 姓名", placeholder: "例如：刘同学", validator: "name" },
      { key: "classmate2Nick", label: "同学 2 昵称/外号", placeholder: "例如：小刘、小鱼", validator: "shortText" },
      { key: "classmate2Phone", label: "同学 2 手机号（选填）", placeholder: "请输入 11 位数字", validator: "phoneOptional", inputMode: "numeric", maxLength: 11, optional: true }
    ]
  }
];

const scaleOptions = ["非常符合", "比较符合", "一般", "比较不符合", "完全不符合"];

const state = {
  current: 0,
  phase: "info",
  answers: {},
  testIndex: 0,
  testAnswers: {},
  error: ""
};

const mission = document.querySelector("#mission");
const stepName = document.querySelector("#stepName");
const stepCount = document.querySelector("#stepCount");
const progressBar = document.querySelector("#progressBar");
const avatarName = document.querySelector("#avatarName");
const avatarStatus = document.querySelector("#avatarStatus");
const nextBtn = document.querySelector("#nextBtn");
const backBtn = document.querySelector("#backBtn");
const reveal = document.querySelector("#reveal");
const relationshipReport = document.querySelector("#relationshipReport");
const restartBtn = document.querySelector("#restartBtn");
const teacherBtn = document.querySelector("#teacherBtn");
const teacherNotes = document.querySelector("#teacherNotes");

function renderStep() {
  if (state.phase === "test") {
    renderQuestion();
    return;
  }

  const step = steps[state.current];
  const value = state.answers[step.key] || "";
  const progress = ((state.current + 1) / steps.length) * 100;

  stepName.textContent = step.stepName;
  stepCount.textContent = `${state.current + 1}/${steps.length}`;
  progressBar.style.width = `${progress}%`;
  backBtn.disabled = state.current === 0;
  nextBtn.textContent = state.current === steps.length - 1 ? "进入第二部分" : "继续测评";

  mission.innerHTML = `
    <h2>${step.title}</h2>
    <div class="form-grid">
      ${renderField(step, value)}
      ${renderError()}
    </div>
  `;

  bindField(step);
  updateHud();
}

function renderField(step, value) {
  if (step.type === "contact") {
    const weixin = state.answers.contactWeixin || "";
    const phone = state.answers.contactPhone || "";
    return `
      <div class="field">
        <label>微信号 <span class="field-hint">（二选一填写即可）</span></label>
        <input id="contactWeixin" type="text" placeholder="例如：wxid_abc123" value="${escapeHtml(weixin)}" maxlength="32">
      </div>
      <div class="field-divider">或</div>
      <div class="field">
        <label for="contactPhone">手机号码</label>
        <input id="contactPhone" type="tel" placeholder="请输入 11 位数字" value="${escapeHtml(phone)}" inputmode="numeric" maxlength="11" pattern="\\d{11}">
      </div>
    `;
  }

  if (step.type === "location") {
    const loc = state.answers.address || "";
    if (!loc) {
      return `
        <div class="location-box">
          <div class="location-anim" id="locAnim">
            <div class="loc-pulse"></div>
            <div class="loc-icon">📍</div>
          </div>
          <p class="location-status" id="locStatus">正在获取当前位置…</p>
          <button id="locPickBtn" class="ghost-btn" type="button" style="margin-top:8px">在地图上手动选点</button>
        </div>
      `;
    }
    return `
      <div class="location-box location-done">
        <div class="loc-icon-sm">📍</div>
        <div class="location-result">
          <p class="location-label">已定位</p>
          <p class="location-value">${escapeHtml(loc)}</p>
        </div>
        <button id="locResetBtn" class="ghost-btn" type="button">重新选点</button>
      </div>
    `;
  }

  if (step.type === "textarea") {
    return `
      <div class="field">
        <label for="fieldInput">${step.label}</label>
        <textarea id="fieldInput" data-key="${step.key}" placeholder="${step.placeholder}">${escapeHtml(value)}</textarea>
      </div>
    `;
  }

  if (step.type === "file") {
    return `
      <div class="field">
        <span class="voice-label">${step.label}</span>
        <div class="fake-upload">
          <button id="photoBtn" class="ghost-btn" type="button">上传照片</button>
          <span class="file-status">${value || "未选择照片"}</span>
        </div>
      </div>
    `;
  }

  if (step.type === "voice") {
    return `
      <div class="field">
        <span class="voice-label">${step.label}</span>
        <div class="voice-box">
          <button id="voiceBtn" class="ghost-btn" type="button">开始录制</button>
          <span class="voice-status">${value || "尚未录制"}</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="field">
      <label for="fieldInput">${step.label}</label>
      <input id="fieldInput" data-key="${step.key}" type="${step.type}" placeholder="${step.placeholder}" value="${escapeHtml(value)}"${renderInputAttrs(step)}>
    </div>
  `;
}

function bindField(step) {
  if (step.type === "contact") {
    const weixinInput = document.querySelector("#contactWeixin");
    const phoneInput = document.querySelector("#contactPhone");
    if (weixinInput) {
      weixinInput.addEventListener("input", (e) => {
        state.answers.contactWeixin = e.target.value.trim();
        state.error = "";
        updateHud();
      });
    }
    if (phoneInput) {
      phoneInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 11);
        state.answers.contactPhone = e.target.value;
        state.error = "";
        updateHud();
      });
    }
    return;
  }

  if (step.type === "location") {
    const locPickBtn = document.querySelector("#locPickBtn");
    const locResetBtn = document.querySelector("#locResetBtn");

    if (locResetBtn) {
      locResetBtn.addEventListener("click", () => {
        state.answers.address = "";
        state.error = "";
        renderStep();
      });
      return;
    }

    if (locPickBtn) {
      locPickBtn.addEventListener("click", () => {
        state.answers.address = "上海招商局广场";
        state.error = "";
        renderStep();
      });
    }

    // 自动定位动画
    const locStatus = document.querySelector("#locStatus");
    if (locStatus) {
      const msgs = ["正在获取 GPS 信号…", "正在匹配基站位置…", "已定位，正在读取地址…"];
      let idx = 0;
      const timer = setInterval(() => {
        idx++;
        if (idx < msgs.length) {
          locStatus.textContent = msgs[idx];
        } else {
          clearInterval(timer);
          state.answers.address = "上海招商局广场";
          state.error = "";
          renderStep();
        }
      }, 900);
    }
    return;
  }

  if (step.type === "voice") {
    const voiceBtn = document.querySelector("#voiceBtn");
    voiceBtn.addEventListener("click", () => {
      state.answers.voice = "声音样本已录制";
      state.error = "";
      renderStep();
    });
    return;
  }

  if (step.type === "file") {
    const photoBtn = document.querySelector("#photoBtn");
    photoBtn.addEventListener("click", () => {
      state.answers.photo = "照片已上传";
      state.error = "";
      renderStep();
    });
    return;
  }

  const input = document.querySelector("#fieldInput");
  input.addEventListener("input", (event) => {
    if (step.validator === "phone") {
      event.target.value = event.target.value.replace(/\D/g, "").slice(0, 11);
      state.answers[step.key] = event.target.value;
    } else {
      state.answers[step.key] = event.target.value.trim();
    }
    state.error = "";
    updateHud();
  });
}

function updateHud() {
  const name = state.answers.name;
  avatarName.textContent = name ? `${name}的关系档案` : "未命名关系档案";
  if (state.phase === "test") {
    avatarStatus.textContent = "关系问卷分析中";
  } else {
    avatarStatus.textContent = completedCount() >= 4 ? "报告分析中" : "等待测评资料同步";
  }
}

function completedCount() {
  return steps.filter((step) => {
    if (step.key === "contact") {
      return Boolean(state.answers.contactWeixin || state.answers.contactPhone);
    }
    return Boolean(state.answers[step.key]);
  }).length;
}

function canMoveForward() {
  if (state.phase === "test") {
    const question = testQuestions[state.testIndex];
    const result = validateQuestion(question);
    state.error = result.message;
    return result.valid;
  }

  const step = steps[state.current];
  if (step.type === "contact") {
    const weixin = (state.answers.contactWeixin || "").trim();
    const phone = (state.answers.contactPhone || "").trim();
    if (!weixin && !phone) {
      state.error = "请填写微信号或手机号（二选一即可）。";
      return false;
    }
    if (phone && !/^\d{11}$/.test(phone)) {
      state.error = "手机号必须是 11 位数字。";
      return false;
    }
    if (weixin && weixin.length < 2) {
      state.error = "微信号至少需要 2 个字符。";
      return false;
    }
    state.error = "";
    return true;
  }
  if (step.type === "location") {
    state.error = state.answers.address ? "" : "请等待定位完成，或手动选点。";
    return Boolean(state.answers.address);
  }
  if (step.type === "voice") {
    state.error = state.answers.voice ? "" : "请先完成声音录制。";
    return Boolean(state.answers.voice);
  }
  if (step.type === "file") {
    state.error = state.answers.photo ? "" : "请先上传照片。";
    return Boolean(state.answers.photo);
  }
  const result = validateValue(step.validator, state.answers[step.key]);
  state.error = result.message;
  return result.valid;
}

nextBtn.addEventListener("click", () => {
  if (!canMoveForward()) {
    renderStep();
    return;
  }

  if (state.phase === "test") {
    if (state.testIndex < testQuestions.length - 1) {
      state.testIndex += 1;
      renderStep();
    } else {
      finishGame();
    }
    return;
  }

  if (state.current < steps.length - 1) {
    state.current += 1;
    renderStep();
  } else {
    state.phase = "test";
    state.testIndex = 0;
    state.error = "";
    renderStep();
  }
});

backBtn.addEventListener("click", () => {
  if (state.phase === "test") {
    if (state.testIndex > 0) {
      state.testIndex -= 1;
    } else {
      state.phase = "info";
      state.current = steps.length - 1;
    }
    state.error = "";
    renderStep();
    return;
  }

  if (state.current > 0) {
    state.current -= 1;
    state.error = "";
    renderStep();
  }
});

restartBtn.addEventListener("click", () => {
  state.current = 0;
  state.phase = "info";
  state.answers = {};
  state.testIndex = 0;
  state.testAnswers = {};
  state.error = "";
  reveal.classList.add("hidden");
  teacherNotes.classList.add("hidden");
  renderStep();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

teacherBtn.addEventListener("click", () => {
  teacherNotes.classList.toggle("hidden");
});

function finishGame() {
  const report = reports[Math.floor(Math.random() * reports.length)];
  const name = state.answers.name || "你";

  // ── 构建信息清单（在清空前保存）──
  const infoSections = [];
  infoSections.push({ title: "📋 第一部分：你的个人信息", items: [] });

  if (state.answers.name) {
    infoSections[0].items.push({ label: "真实姓名", value: state.answers.name });
  }
  if (state.answers.contactWeixin) {
    infoSections[0].items.push({ label: "微信号", value: state.answers.contactWeixin });
  }
  if (state.answers.contactPhone) {
    infoSections[0].items.push({ label: "手机号码", value: state.answers.contactPhone });
  }
  if (state.answers.birthday) {
    infoSections[0].items.push({ label: "出生日期", value: state.answers.birthday });
  }
  if (state.answers.address) {
    infoSections[0].items.push({ label: "当前位置 / 地址", value: state.answers.address });
  }
  if (state.answers.photo) {
    infoSections[0].items.push({ label: "个人照片", value: state.answers.photo });
  }
  if (state.answers.voice) {
    infoSections[0].items.push({ label: "声音样本", value: state.answers.voice });
  }

  // 第二部分：问卷中收集的他人信息
  const testInfoItems = [];

  // 家人信息
  const q6 = state.testAnswers.q6 || {};
  if (q6.familyName || q6.familyPhone || q6.familyWork) {
    testInfoItems.push({ group: "👨‍👩‍👧 家庭成员信息（第 6 题）", items: [
      { label: "家人姓名", value: q6.familyName },
      { label: "家人电话", value: q6.familyPhone },
      { label: "工作单位", value: q6.familyWork },
    ].filter(i => i.value) });
  }

  // 同桌信息
  const q8 = state.testAnswers.q8 || {};
  if (q8.deskMateName || q8.deskMateNick || q8.deskMatePhone) {
    testInfoItems.push({ group: "👥 同桌基本信息（第 8 题）", items: [
      { label: "同桌姓名", value: q8.deskMateName },
      { label: "同桌昵称/外号", value: q8.deskMateNick },
      { label: "同桌手机号", value: q8.deskMatePhone },
    ].filter(i => i.value) });
  }

  // 同学 & 班级信息
  const q10 = state.testAnswers.q10 || {};
  if (q10.school || q10.classInfo || q10.classmate1Name || q10.classmate2Name) {
    testInfoItems.push({ group: "🏫 班级与同学信息（第 10 题）", items: [
      { label: "学校名称", value: q10.school },
      { label: "年级班级", value: q10.classInfo },
      { label: "同学 1 姓名", value: q10.classmate1Name },
      { label: "同学 1 昵称", value: q10.classmate1Nick },
      { label: "同学 1 手机号", value: q10.classmate1Phone },
      { label: "同学 2 姓名", value: q10.classmate2Name },
      { label: "同学 2 昵称", value: q10.classmate2Nick },
      { label: "同学 2 手机号", value: q10.classmate2Phone },
    ].filter(i => i.value) });
  }

  // 渲染假报告
  relationshipReport.innerHTML = `
    <p class="report-kicker">人际关系报告已生成</p>
    <h2>${escapeHtml(name)}：${report.type}</h2>
    <div class="report-score">
      <span>关系亲和指数</span>
      <strong>${report.score}</strong>
    </div>
    <p>${report.summary}</p>
    <ul>
      ${report.traits.map((trait) => `<li>${trait}</li>`).join("")}
    </ul>
    <p class="report-advice">${report.advice}</p>

    ${buildDataDisclosure(infoSections, testInfoItems)}
  `;

  state.answers = {};
  state.testAnswers = {};
  reveal.classList.remove("hidden");
  updateHud();
  reveal.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildDataDisclosure(infoSections, testInfoItems) {
  const totalItems = infoSections.reduce((sum, s) => sum + s.items.length, 0)
    + testInfoItems.reduce((sum, g) => sum + g.items.length, 0);

  let html = `
    <div class="data-disclosure">
      <h3 class="disclosure-title">⚠️ 你刚刚提交了以下全部信息</h3>
      <p class="disclosure-count">共 ${totalItems} 条信息已被"收集"</p>
  `;

  // 第一部分个人信息
  if (infoSections[0] && infoSections[0].items.length > 0) {
    html += `<div class="disclosure-section"><h4>${infoSections[0].title}</h4><ul>`;
    html += infoSections[0].items.map(item =>
      `<li><span class="dl">${item.label}</span> <span class="dv">${escapeHtml(item.value)}</span></li>`
    ).join("");
    html += `</ul></div>`;
  }

  // 第二部分他人信息
  if (testInfoItems.length > 0) {
    for (const group of testInfoItems) {
      html += `<div class="disclosure-section"><h4>${group.group}</h4><ul>`;
      html += group.items.map(item =>
        `<li><span class="dl">${item.label}</span> <span class="dv">${escapeHtml(item.value)}</span></li>`
      ).join("");
      html += `</ul></div>`;
    }
  }

  html += `</div>`;
  return html;
}

function renderQuestion() {
  const question = testQuestions[state.testIndex];
  const value = state.testAnswers[question.key] || "";
  const progress = ((state.testIndex + 1) / testQuestions.length) * 100;

  stepName.textContent = question.type === "trapFields" ? "关系图谱校准" : (question.text.startsWith("【同学默契测试】") ? "同学默契测试" : "关系测评");
  stepCount.textContent = `${state.testIndex + 1}/${testQuestions.length}`;
  progressBar.style.width = `${progress}%`;
  backBtn.disabled = false;
  nextBtn.textContent = state.testIndex === testQuestions.length - 1 ? "生成报告" : "下一题";

  mission.innerHTML = `
    <h2>第二部分：人际关系测试</h2>
    <div class="question-card">
      <p class="question-number">第 ${state.testIndex + 1} 题</p>
      <p class="question-text">${question.text}</p>
      ${renderQuestionInput(question, value)}
      ${renderError()}
    </div>
  `;

  bindQuestion(question);
  updateHud();
}

function renderQuestionInput(question, value) {
  if (question.type === "scale") {
    const options = question.customOptions || scaleOptions;
    return `
      <div class="option-list" role="radiogroup" aria-label="选择符合程度">
        ${options.map((option) => `
          <label class="option-item">
            <input type="radio" name="questionOption" value="${option}" ${value === option ? "checked" : ""}>
            <span>${option}</span>
          </label>
        `).join("")}
      </div>
    `;
  }

  if (question.type === "trapFields") {
    const groupValue = value || {};
    return `
      <div class="trap-grid">
        ${question.fields.map((field) => `
          <div class="field${field.optional ? " field-optional" : ""}">
            <label for="${question.key}-${field.key}">${field.label}</label>
            <input id="${question.key}-${field.key}" data-subkey="${field.key}" type="text" placeholder="${field.placeholder}" value="${escapeHtml(groupValue[field.key] || "")}"${renderInputAttrs(field)}>
          </div>
        `).join("")}
      </div>
    `;
  }

  return `
    <div class="field">
      <input id="questionInput" type="text" placeholder="${question.placeholder}" value="${escapeHtml(value)}">
    </div>
  `;
}

function bindQuestion(question) {
  if (question.type === "scale") {
    document.querySelectorAll("input[name='questionOption']").forEach((input) => {
      input.addEventListener("change", (event) => {
        state.testAnswers[question.key] = event.target.value;
        state.error = "";
      });
    });
    return;
  }

  if (question.type === "trapFields") {
    document.querySelectorAll("[data-subkey]").forEach((input) => {
      input.addEventListener("input", (event) => {
        const field = question.fields.find((item) => item.key === event.target.dataset.subkey);
        if (field?.validator === "phone" || field?.validator === "phoneOptional") {
          event.target.value = event.target.value.replace(/\D/g, "").slice(0, 11);
        }
        state.testAnswers[question.key] = {
          ...(state.testAnswers[question.key] || {}),
          [event.target.dataset.subkey]: event.target.value.trim()
        };
        state.error = "";
      });
    });
  }
}

function validateQuestion(question) {
  if (question.type === "scale") {
    return state.testAnswers[question.key]
      ? { valid: true, message: "" }
      : { valid: false, message: "请选择一个选项后再继续。" };
  }

  if (question.type === "trapFields") {
    const values = state.testAnswers[question.key] || {};
    for (const field of question.fields) {
      if (field.optional) {
        // 选填：只在有值时验证手机号格式
        const v = (values[field.key] || "").trim();
        if (v && field.validator === "phoneOptional" && !/^\d{11}$/.test(v)) {
          return { valid: false, message: `${field.label}：手机号必须是 11 位数字。` };
        }
        continue;
      }
      const result = validateValue(field.validator, values[field.key]);
      if (!result.valid) {
        return { valid: false, message: `${field.label}：${result.message}` };
      }
    }
    return { valid: true, message: "" };
  }

  return { valid: false, message: "请完成当前题目后再继续。" };
}

function validateValue(type, rawValue) {
  const value = String(rawValue || "").trim();
  if (!value) return { valid: false, message: "请填写这一项。" };

  if (type === "name") {
    const chineseName = /^[\u4e00-\u9fa5·]{2,8}$/;
    const englishName = /^[A-Za-z][A-Za-z .'-]{1,39}$/;
    return chineseName.test(value) || englishName.test(value)
      ? { valid: true, message: "" }
      : { valid: false, message: "请输入看起来像人名的内容，不能包含数字或符号。" };
  }

  if (type === "phone" || type === "phoneOptional") {
    return /^\d{11}$/.test(value)
      ? { valid: true, message: "" }
      : { valid: false, message: "手机号必须是 11 位数字。" };
  }

  if (type === "date") {
    return value
      ? { valid: true, message: "" }
      : { valid: false, message: "请选择日期。" };
  }

  if (type === "address") {
    return value.length >= 8 && value.length <= 80
      ? { valid: true, message: "" }
      : { valid: false, message: "请输入 8 到 80 个字的地址。" };
  }

  if (type === "shortText") {
    return value.length >= 2 && value.length <= 40
      ? { valid: true, message: "" }
      : { valid: false, message: "请输入 2 到 40 个字。" };
  }

  return { valid: true, message: "" };
}

function renderInputAttrs(config) {
  const attrs = [];
  if (config.inputMode) attrs.push(` inputmode="${config.inputMode}"`);
  if (config.maxLength) attrs.push(` maxlength="${config.maxLength}"`);
  if (config.validator === "phone" || config.validator === "phoneOptional") attrs.push(' pattern="\\d{11}"');
  return attrs.join("");
}

function renderError() {
  return state.error ? `<div class="form-error" role="alert">${escapeHtml(state.error)}</div>` : "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

renderStep();
