<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-6 col-lg-3">
        <div class="card card-inverse card-primary">
          <div class="card-block pb-0">
            <dropdown class="float-right" type="transparent p-0">
              <i slot="button" class="icon-settings"></i>
              <div slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#">行为分析</a>
                <a class="dropdown-item" href="#">时间分析</a>
                <a class="dropdown-item" href="#">类别分析</a>
              </div>
            </dropdown>
            <h4 class="mb-0">19823</h4>
            <p>日志</p>
          </div>
          <card-line1-chart-example class="chart-wrapper px-3" style="height:70px;" height="70"/>
        </div>
      </div><!--/.col-->

      <div class="col-sm-6 col-lg-3">
        <div class="card card-inverse card-info">
          <div class="card-block pb-0">
            <dropdown class="float-right" type="transparent p-0">
              <i slot="button" class="icon-settings"></i>
              <div slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#">快速处理</a>
                <a class="dropdown-item" href="#">趋势分析</a>
                <a class="dropdown-item" href="#">历史回溯</a>
              </div>
            </dropdown>
            <h4 class="mb-0">22</h4>
            <p>告警</p>
          </div>
          <card-line2-chart-example class="chart-wrapper px-3" style="height:70px;" height="70"/>
        </div>
      </div><!--/.col-->

      <div class="col-sm-6 col-lg-3">
        <div class="card card-inverse card-warning">
          <div class="card-block pb-0">
            <div class="btn-group float-right">
              <dropdown class="float-right" type="transparent p-0">
                <i slot="button" class="icon-settings"></i>
                <div slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">危险IP库</a>
                    <a class="dropdown-item" href="#">恶意软件库</a>
                    <a class="dropdown-item" href="#">恶意地址库</a>
                    <a class="dropdown-item" href="#">病毒库</a>
                </div>
              </dropdown>
            </div>
            <h4 class="mb-0">2932</h4>
            <p>威胁情报</p>
          </div>
          <card-line3-chart-example class="chart-wrapper" style="height:70px;" height="70"/>
        </div>
      </div><!--/.col-->

      <div class="col-sm-6 col-lg-3">
        <div class="card card-inverse card-danger">
          <div class="card-block pb-0">
            <div class="btn-group float-right">
              <dropdown class="float-right" type="transparent p-0">
                <i slot="button" class="icon-settings"></i>
                <div slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">网络拓扑</a>
                  <a class="dropdown-item" href="#">安全评估</a>
                  <a class="dropdown-item" href="#">事件审计</a>
                </div>
              </dropdown>
            </div>
            <h4 class="mb-0">1233</h4>
            <p>IT资产</p>
          </div>
          <card-bar-chart-example class="chart-wrapper px-3" style="height:70px;" height="70"/>
        </div>
      </div><!--/.col-->
    </div><!--/.row-->

    <div class="card">
      <div class="card-block">
        <div class="row">
          <div class="col-sm-5">
            <h4 class="card-title mb-0">告警趋势分布</h4>
            <div class="small text-muted">2017年05月</div>
          </div><!--/.col-->
          <div class="col-sm-7 hidden-sm-down">
            <button type="button" class="btn btn-primary float-right"><i class="icon-cloud-download"></i></button>
            <div class="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group mr-3" data-toggle="buttons" aria-label="First group">
                <label class="btn btn-outline-secondary">
                  <input type="radio" name="options" id="option1"> 天
                </label>
                <label class="btn btn-outline-secondary active">
                  <input type="radio" name="options" id="option2" checked> 月
                </label>
                <label class="btn btn-outline-secondary">
                  <input type="radio" name="options" id="option3"> 年
                </label>
              </div>
            </div>
          </div><!--/.col-->
        </div><!--/.row-->
        <main-chart-example class="chart-wrapper" style="height:300px;margin-top:40px;" height="300">
        </main-chart-example>
      </div>
      <div class="card-footer">
        <ul>
          <li>
            <div class="text-muted">路由器</div>
            <strong>297次 (40%)</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-success" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
          <li class="hidden-sm-down">
            <div class="text-muted">数据库</div>
            <strong>149次 (20%)</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
          <li>
            <div class="text-muted">防火墙</div>
            <strong>149次 (20%)</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
          <li class="hidden-sm-down">
            <div class="text-muted">主机</div>
            <strong>79次 (10%)</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
          <li class="hidden-sm-down">
            <div class="text-muted">恶意软件</div>
            <strong>79次 (10%)</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
        </ul>
      </div>
    </div><!--/.card-->
     
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            日志 &amp; 告警
          </div>
          <div class="card-block">
            <div class="row">
              <div class="col-sm-12 col-lg-4">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="callout callout-info">
                      <small class="text-muted">数据库日志</small><br>
                      <strong class="h4">9,123</strong>
                    </div>
                  </div><!--/.col-->
                  <div class="col-sm-6">
                    <div class="callout callout-danger">
                      <small class="text-muted">WEB服务器日志</small><br>
                      <strong class="h4">22,643</strong>
                    </div>
                  </div><!--/.col-->
                </div><!--/.row-->
                <hr class="mt-0">
                <ul class="horizontal-bars">
                  <li>
                    <div class="title">
                      星期一
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 34%" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 78%" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      星期二
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 56%" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 94%" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      星期三
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 12%" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 67%" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      星期四
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 91%" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      星期五
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 22%" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 73%" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      星期六
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 53%" aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 82%" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      星期天
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 9%" aria-valuenow="9" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 69%" aria-valuenow="69" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li class="legend">
                    <span class="badge badge-pill badge-info"></span> <small>告警数量</small> &nbsp; <span class="badge badge-pill badge-danger"></span> <small>日志数量</small>
                  </li>
                </ul>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-4">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="callout callout-warning">
                      <small class="text-muted">IP地址库</small><br>
                      <strong class="h4">78,623</strong>
                    </div>
                  </div><!--/.col-->
                  <div class="col-sm-6">
                    <div class="callout callout-success">
                      <small class="text-muted">恶意病毒库</small><br>
                      <strong class="h4">49,123</strong>
                    </div>
                  </div><!--/.col-->
                </div><!--/.row-->
                <hr class="mt-0">
                <ul class="horizontal-bars type-2">
                  <li>
                    <i class="fa fa-mail-forward"></i>
                    <span class="title">本月新增</span>
                    <span class="value">43%</span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-mail-reply"></i>
                    <span class="title">本月失效</span>
                    <span class="value">27%</span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 37%" aria-valuenow="27" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <i class="icon-globe"></i>
                    <span class="title">IP地址库</span>
                    <span class="value">51,223 <span class="text-muted small">(56%)</span></span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 56%" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-bug"></i>
                    <span class="title">恶意软件库</span>
                    <span class="value">191,235 <span class="text-muted small">(15%)</span></span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-eye-slash"></i>
                    <span class="title">病毒库</span>
                    <span class="value">37,564 <span class="text-muted small">(11%)</span></span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 11%" aria-valuenow="11" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-external-link"></i>
                    <span class="title">恶意地址库</span>
                    <span class="value">27,319 <span class="text-muted small">(8%)</span></span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 8%" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li class="divider text-center">
                    <button type="button" class="btn btn-sm btn-link text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="show more"><i class="icon-options"></i></button>
                  </li>
                </ul>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-4">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="callout">
                      <small class="text-muted">数据库</small><br>
                      <strong class="h4">23%</strong>
                    </div>
                  </div><!--/.col-->
                  <div class="col-sm-6">
                    <div class="callout callout-primary">
                      <small class="text-muted">路由器</small><br>
                      <strong class="h4">5%</strong>
                    </div>
                  </div><!--/.col-->
                </div><!--/.row-->
                <hr class="mt-0">
                <ul class="icons-list">
                  <li>
                    <i class="icon-screen-desktop bg-primary"></i>
                    <div class="desc">
                      <div class="title">WEB服务器</div>
                      <small>10.1.2.9</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">本周告警次数</div>
                      <strong>19</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li>
                    <i class="icon-screen-smartphone bg-info"></i>
                    <div class="desc">
                      <div class="title">移动业务服务器</div>
                      <small>10.1.34.2</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">本周告警次数</div>
                      <strong>17</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li>
                    <i class="icon-screen-smartphone bg-warning"></i>
                    <div class="desc">
                      <div class="title">短信服务器</div>
                      <small>10.1.34.2</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">本周告警次数</div>
                      <strong>15</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li>
                    <i class="icon-user bg-danger"></i>
                    <div class="desc">
                      <div class="title">异常登录</div>
                      <small>数据来源4A</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">本周告警次数</div>
                      <strong>11</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li>
                    <i class="icon-social-spotify bg-success"></i>
                    <div class="desc">
                      <div class="title">文件异常传输</div>
                      <small>数据来源于防火墙</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">本周告警次数</div>
                      <strong>10</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li>
                    <i class="icon-cloud-download bg-danger"></i>
                    <div class="desc">
                      <div class="title">云端数据服务器</div>
                      <small>10.12.1.9</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">本周告警次数</div>
                      <strong>9</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li>
                    <i class="icon-camera bg-warning"></i>
                    <div class="desc">
                      <div class="title">照片服务器</div>
                      <small>10.12.1.19</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">本周异常次数</div>
                      <strong>10.12.1.29</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li class="divider text-center">
                    <button type="button" class="btn btn-sm btn-link text-muted" data-toggle="tooltip" data-placement="top" title="show more"><i class="icon-options"></i></button>
                  </li>
                </ul>
              </div><!--/.col-->
            </div><!--/.row-->
            <br/>
            <table class="table table-hover table-outline mb-0">
              <thead class="thead-default">
                <tr>
                  <th>攻击地址</th>
                  <th class="text-center">所属区域</th>
                  <th>行为异常比例</th>
                  <th class="text-center">异常行为</th>
                  <th>最新活动时间</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>2.2.2.11</div>
                    <div class="small text-muted">
                      <span>新</span> | 首次异常: 2016-12-01
                    </div>
                  </td>
                  <td class="text-center">
                    <img src="static/img/flags/USA.png" alt="USA" style="height:24px;">
                  </td>
                  <td>
                    <div class="clearfix">
                      <div class="float-left">
                        <strong>50%</strong>
                      </div>
                      <div class="float-right">
                        <small class="text-muted">2016-12-01 - 2017-05-10</small>
                      </div>
                    </div>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </td>
                  <td class="text-center">
                    高频度访问
                  </td>
                  <td>
                    <div class="small text-muted">最新操作时间</div>
                    <strong>10秒以前</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                   <div>2.2.12.2</div>
                    <div class="small text-muted">
                      <span>新</span> | 首次异常: 2016-12-01
                    </div>
                  </td>
                  <td class="text-center">
                    <img src="static/img/flags/Brazil.png" alt="Brazil" style="height:24px;">
                  </td>
                  <td>
                    <div class="clearfix">
                      <div class="float-left">
                        <strong>10%</strong>
                      </div>
                      <div class="float-right">
                        <small class="text-muted">2016-12-01 - 2017-05-10</small>
                      </div>
                    </div>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </td>
                  <td class="text-center">
                    疑似暴力破解
                  </td>
                  <td>
                    <div class="small text-muted">最新操作时间</div>
                    <strong>2017-05-10 12:00:01</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                   <div>2.2.12.3</div>
                    <div class="small text-muted">
                      <span>新</span> | 首次异常: 2016-12-01
                    </div>
                  </td>
                  <td class="text-center">
                    <img src="static/img/flags/Brazil.png" alt="Brazil" style="height:24px;">
                  </td>
                  <td>
                    <div class="clearfix">
                      <div class="float-left">
                        <strong>10%</strong>
                      </div>
                      <div class="float-right">
                        <small class="text-muted">2016-12-01 - 2017-05-10</small>
                      </div>
                    </div>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </td>
                  <td class="text-center">
                      远程登陆主机    
                  </td>
                  <td>
                    <div class="small text-muted">最新操作时间</div>
                    <strong>2017-05-10 12:00:01</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div><!--/.col-->
    </div><!--/.row-->
  </div>
</template>

<script>
import CardLine1ChartExample from './dashboard/CardLine1ChartExample.vue'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample.vue'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample.vue'
import CardBarChartExample from './dashboard/CardBarChartExample.vue'
import MainChartExample from './dashboard/MainChartExample.vue'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample.vue'

import { dropdown } from 'components/vue-strap'

export default {
  name: 'dashboard',
  components: {
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    dropdown
  }
}
</script>
