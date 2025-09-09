# 内置CSS类名

```css
body {
  --padding: 14px;
  --margin: 14px;
  --padding-x: 14px;
  --padding-x-small: 10px;
  --padding-y: 10px;
  --padding-y-small: 6px;
}

.gi-card-title {
  .gi-card-header__title {
    padding-left: 8px;
    position: relative;

    &::before {
      content: '';
      width: 4px;
      height: 20px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--el-color-primary);
      border-radius: 0 4px 4px 0;
    }
  }
}

.gi-w-full {
  width: 100%;
}

.gi-h-full {
  height: 100%;
}

.gi-line-1 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.gi-line-2 {
  line-clamp: 2;
  -webkit-line-clamp: 2;
}

.gi-line-3 {
  line-clamp: 3;
  -webkit-line-clamp: 3;
}

.gi-line-4 {
  line-clamp: 4;
  -webkit-line-clamp: 4;
}

.gi-line-5 {
  line-clamp: 5;
  -webkit-line-clamp: 5;
}

.gi-line-2,
.gi-line-3,
.gi-line-4,
.gi-line-5 {
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; // 弹性伸缩盒
  -webkit-box-orient: vertical; // 设置伸缩盒子元素排列方式
}

.gi-mt {
  margin-top: var(--margin);
}

.gi-mb {
  margin-bottom: var(--margin);
}

.gi-ml {
  margin-left: var(--margin);
}

.gi-mr {
  margin-right: var(--margin);
}

.gi-mx {
  margin-left: var(--margin);
  margin-right: var(--margin);
}

.gi-my {
  margin-top: var(--margin);
  margin-bottom: var(--margin);
}

.gi-m0 {
  margin: 0;
}

.gi-pt {
  padding-top: var(--padding);
}

.gi-pb {
  padding-bottom: var(--padding);
}

.gi-pl {
  padding-left: var(--padding);
}

.gi-pr {
  padding-right: var(--padding);
}

.gi-px {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.gi-py {
  padding-top: var(--padding);
  padding-bottom: var(--padding);
}

.gi-p0 {
  padding: 0;
}
```
