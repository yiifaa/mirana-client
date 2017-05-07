<template>
  <aside class="aside-menu px-4">
    <div class="aside-options">
      <div class="clearfix mt-4">
        <small><b v-message="'commons.alarm'"></b></small>
        <label class="switch switch-text switch-pill switch-success switch-sm float-right">
          <input type="checkbox" class="switch-input" checked>
          <span class="switch-label" :data-on="$t('commons.on')" :data-off="$t('commons.off')"></span>
          <span class="switch-handle"></span>
        </label>
      </div>
      <div>
        <small class="text-muted" v-message="'commons.alarmDesc'">
        </small>
      </div>
    </div>
    <div class="aside-options">
      <div class="clearfix mt-3">
        <small><b v-message="'commons.audit'"></b></small>
        <label class="switch switch-text switch-pill switch-success switch-sm float-right">
          <input type="checkbox" class="switch-input">
          <span class="switch-label" :data-on="$t('commons.on')" :data-off="$t('commons.off')"></span>
          <span class="switch-handle"></span>
        </label>
      </div>
      <div>
        <small class="text-muted" v-message="'commons.auditDesc'">
        </small>
      </div>
    </div>
    <div class="aside-options">
      <div class="clearfix mt-3">
        <small><b v-message="'commons.autoUpdate'"></b></small>
        <label class="switch switch-text switch-pill switch-success switch-sm float-right">
          <input type="checkbox" class="switch-input">
          <span class="switch-label" :data-on="$t('commons.on')" :data-off="$t('commons.off')"></span>
          <span class="switch-handle"></span>
        </label>
      </div>
    </div>
    <div class="aside-options">
      <div class="clearfix mt-3">
        <small><b v-message="'commons.themes'"></b></small>
        <label class="switch switch-text switch-pill switch-success switch-sm float-right">
          <input type="checkbox" class="switch-input" checked>
          <span class="switch-label" :data-on="$t('commons.on')" :data-off="$t('commons.off')"></span>
          <span class="switch-handle"></span>
        </label>
      </div>
    </div>
    <hr>
    <h6 v-message="'commons.systemUtil'"></h6>
    <div class="text-uppercase mb-1 mt-4"><small><b v-message="'commons.cpu'"></b></small></div>
    <div class="progress progress-xs">
      <div class="progress-bar bg-info" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <small class="text-muted">348 个进程, 1/4 核心.</small>
    <div class="text-uppercase mb-1 mt-2"><small><b v-message="'commons.memory'"></b></small></div>
    <div class="progress progress-xs">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <small class="text-muted">11444GB/16384 MB</small>
    <div class="text-uppercase mb-1 mt-2"><small><b>硬盘1</b></small></div>
    <div class="progress progress-xs">
      <div class="progress-bar bg-danger" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <small class="text-muted">243GB/256 GB</small>
    <div class="text-uppercase mb-1 mt-2"><small><b>硬盘2</b></small></div>
    <div class="progress progress-xs">
      <div class="progress-bar bg-success" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <small class="text-muted">25GB/256 GB</small>
  </aside>
</template>

<script>
    export default {

        name: 'aside'

    }
</script>
