---
layout: post
title: 《云原生架构白皮书》读书笔记
categories: 读书
description: 《云原生架构白皮书》读书笔记
keywords: 云原生, 架构
---

# 1. 为什么需要云原生架构？

在企业数字化转型的今天，越来越多的业务演变成数字化业务，数字化对于业务渠道、竞争格局、用户体验、降本增效等诸多方面都带来更加严苛的要求。基于云原生架构，可以充分利用云计算优势，释放云计算的技术红利，让业务更敏捷、成本更低的同时，具备更灵活的又可伸缩性。

# 2. 云原生架构的定义

从技术的角度，云原生架构是基于云原生技术的一组架构原则和设计模式的集合，旨在将云应用中的 非业务代码部分进行最大化的剥离，从而让云设施接管应用中原有的大量非功能特性（如弹性、韧性、安全、 可观测性、灰度等），使业务不再有非功能性业务中断困扰的同时，具备轻量、敏捷、高度自动化的特点。

由此带来的几个大的变革：

- 代码结构发生巨大变化。云把三方软硬件能力升级为服务，大大降低开发和运维人员的工作复杂度。

- 非功能性特性的大量委托。大量分布式场景下复杂的非功能特性，由云产品处理掉。

- 高度自动化的软件交付。基于容器、面向终态的标准化的软件交付。

云原生架构的几大原则：

- 服务化原则

- 弹性原则

- 可观测原则（在云这样的分布式系统中， 让一次 APP 点击背后的多次服务调用的耗时、返回值和参数都清晰可见，甚至可以下钻到每次三方软件调用、SQL 请求、节点拓扑、网络响应等）

- 韧性原则（从多个维度诠释了软件持续提供业务服务的能力，提升软件的 MTBF（Mean Time Between Failure，平均无故障时间））

- 所有过程自动化原则

- 零信任原则

- 架构持续演进原则

云原生架构的几大主要架构模式：

- 服务化架构模式

- Mesh 化架构模式（将中间件框架从业务进程中剥离，进一步与业务代码解耦）

- Serverless 模式（Serverless 非常适合于事件驱动的数据计算任务、计算时间短的请 求 / 响应应用、没有复杂相互调用的长周期任务）

- 存储计算分离模式

- 分布式事务模式

- 可观测架构（包括 Logging、Tracing、Metrics 三个方面）

- 事件驱动架构

# 3. 主要云原生技术

## 3.1 容器技术

容器作为标准化软件单元，它将应用及其所有依赖项打包，使应用不再受环境限制，在不同计算环境 间快速、可靠地运行。容器技术让开发所需要的灵活性、开放性和运维所关注的标准化、自动化达成相对平衡。

容器技术的三个核心价值：

- 敏捷（基于容器技术，可以大大提升软件交付的效率）

- 弹性（快速的扩缩容）

- 可移植性（容器：应用分发和交付的标准技术；Kubernetes：资源调度 和编排的标准，屏蔽了底层架构差异性，帮助应用平滑运行在不同基础设施上）

### 容器编排

容器编排的事实标准：Kubernetes。Kubernetes 提供了分布式应用管理的核心能力：

- 资源调度

- 应用部署与管理

- 自动修复

- 服务发现与负载均衡

- 弹性伸缩

Kubernetes 在容器编排中有几个关键设计理念：声明式 API、可扩展性架构、可移植性。

## 3.2 云原生微服务

微服务模式将后端单体应用拆分为松耦合的多个子应用，每个子应用负责一组子功能。这些子应用称为“微 服务”，多个“微服务”共同形成了一个物理独立但逻辑完整的分布式微服务体系。

在云原生时代，云原生微服务体系将充分利用云资源的高可用和安全体系，让应用获得更有保障的弹性、 可用性与安全性。

微服务设计的约束：

- 微服务个体约束（微服务应用，所完成的功能在业务域划分上应是相互独立的。满足SOLID 原则中单一职责原则（SRP, Single Responsibility Principle））

- 微服务与微服务之间的横向关系（服务的发布、订阅，服务之间的调用，在高性能场景下的考虑，限流、熔断、隔仓、负载均衡等增强服务韧性的机制成为了标配）

- 微服务与数据层之间的纵向约束（提倡数据存储隔离（DSS, Data Storage Segregation）原则，取读写分离（CQRS）手段，计算与存储分离原则）

- 全局视角下的微服务分布式约束（高效运维整个系统，全自动化的 CI/CD 流水线满；全链路、实时和多维度的可观测能力成为标配）

云原生微服务典型架构：

- 第一代。单服务负责从上往下的所有逻辑（业务逻辑、上下游寻址、通讯，以及容错等）

![](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/321/1596101013790-82d02745-9718-42a6-9103-947d45cdff19.png)

- 第二代。服务之间的通讯以 及容错机制开始模块化，形成独立服务框架。

![](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/321/1596101049649-78ece87b-629e-4d86-a997-2893e2518b97.png)

- 第三代。服务网格，原来被模块化到服务框架里的微服务基础能力，被进一步的从一 个 SDK 演进成为一个独立进程 - Sidecar。

![](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/321/1596101092529-2b6533d6-cdaf-4a08-b50c-9b940d33ac63.png)

- 第四代。Serverless。微服务进一步由一个应用简化为微逻辑（Micrologic），更多可复用的分布式能力从应用中剥离。

![](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/321/1596101163667-4520bbc1-0b00-4dd0-b71b-dd276954d51d.png)

主要微服务技术：Apache Dubbo 、Spring Cloud、Eclipse MicroProfile、Tars（腾讯将其内部使用的微服务框架 TAF（Total Application Framework））、SOFAStack（Scalable Open Financial Architecture Stack）、Dapr（Distributed Application Runtime）。

## 3.3 Serverless

Serverless服务的几大特征：

- 全托管的计算服务

- 通用性

- 自动的弹性伸缩

- 按量计费

函数计算（Function as a Service）是 Serverless 中最具代表性的产品形态。下面是传统的弹性计算服务、基于容器的 Serverless 应用服务和函数计算的对比：

![](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/321/1596438742469-43e10fde-097a-48d1-8131-6b5486cceb02.png)

Serverless的几个主要场景：

- 小程序 /Web/Mobile/API 后端服务

- 大规模批处理任务

- 基于事件驱动架构的在线应用和离线数据处理

- 开发运维自动化

Serverless模式的几个技术关注点：

- 计算资源弹性调度

- 负载均衡和流控

- 安全性

## 3.4 开放应用模型（OAM）

2019 年末，阿里云联合微软共同发布了 Open Application Model (OAM) 开源项目，其主要目标是解决从 Kubernetes 项目到“以应用为中心”的平台之间最关键环节 —— 标准化应用定义。（这是阿里主动制定行业规范的一个非常棒的开始。）

通过OAM，建立对应用和它所需的运维能力定义与描述的标准规范。OAM 的描述模型是基于 Kubernetes API 的资源模型（Kubernetes Resource Model） 来构建的，它强调一个现代应用是多个资源的集合，而非一个简单工作负载。

OAM的核心概念：

- 组件依赖（Component）。OAM 定义和规范了组成应用的组件。例如，一个前端 Web Server 容器、数据库服务、后端服务容器等。

- 应用运维特征（Trait）。OAM 定义和规范了应用所需的运维特征的集合。例如，弹性伸缩和 Ingress 等运维能力。

- 应用配置（Application Configuration）。OAM 定义和规范了应用实例化所需的配置机制，从而能够将上述这些描述转化为具体应用实例。运维人员可以定义和使用应用配置来组合上述的组件和相应的特征，以构建可部署的应用交付实例。

一个基于 OAM 构建的 Kubernetes 应用管理平台示意图：

![](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/321/1596442246593-cd8814b3-a758-45aa-8dbe-9338d778c2e0.png)

## 3.5 Service Mesh 技术

Service Mesh 是分布式应用在微服务软件架构之上发展起来的新技术，旨在将那些微服务间的**连接、安全、流量控制和可观测**等通用功能**下沉**为平台基础设施，实现应用与平台基础设施的**解耦**。

通过Service Mesh化，开发者无需关注微服务相关治理问题而聚焦于业务逻辑本身，从而提升应用开发效率并加速业务探索和创新。同时，因为大量非功能性从业务进程剥离到独立进程中，Service Mesh 以无侵入的方式实现了应用轻量化。

下图展示了 Service Mesh 的 典型架构：

![](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/321/1596443366436-85df1ca9-fa42-422a-9c36-60cea00364d1.png)

## 3.6 DevOps

DevOps 就是为了提高软件研发效率，快速应对变化，持续交付价值的的一系列理念和实践，其基本思想就是持续部署（CD)，让软件的构建、测试、发布能够更加快捷可靠，以尽量缩短系统变更从提交到最后安全部署到生产系统的时间。

### IaC 和 GitOps

DevOps 所面对的矛盾就是开发和运维团队之间的矛盾。因为两个团队的关注点完全不同，或者说 是冲突的。在这种背景下，IaC（Infrastructure as Code） 提出系统建设的核心理念，兼顾高效和安全，让运维系统的建设更加有序。

运维平台的两类实现方式：

- 指令式
- 声明式

声明式接口是一种和云计算时代相契合的思维范式。几个主要优势：幂等性、变更审核简单明了、复杂性抽象。

GitOps 作为 IaC 运维理念的一种具体落地方式，就是使用 Git 来存储关于应用系统的最终状态的声明式描述。GitOps 的核心是一个 GitOps 引擎，它负责监控 Git 中的状态，每当它发现状态有改变，它就负责把目标应用系统中的状态以安全可靠的方式迁移到目标状态，实现部署、升级、配置修改、回滚等操作。

和 GitOps 配套的一个基本假设是不可变基础设施，所以 GitOps 和 Kubernetes 运维可以非常好的配合。

### 云原生时代的 DevOps

一个完整开发流程涉及到很多步骤，而环节越多，一次循环花费的时间越长，效率就越低。微服务通过把巨石 应用拆解为若干单功能的服务，减少了服务间的耦合性，让开发和部署更加便捷，可以有效降低开发周期，提高 部署灵活性。Service Mesh 让中间件的升级和应用系统的升级完全解耦，在运维和管控方面的灵活性获得提升。 Serverless 让运维对开发透明，对于应用所需资源进行自动伸缩。FaaS 是 Serverless 的一种实现，则更加简化 了开发运维的过程，从开发到最后测试上线都可以在一个集成开发环境中完成。无论哪一种场景，后台的运维平台的 工作都是不可以缺少的，只是通过技术让扩容、容错等技术对开发人员透明，让效率更高。

## 3.7 云原生中间件

在云原生时代，传统中间件技术也演化升级为云原生中间件，云原生中间件主要包括网格化的服务架构、事件驱 动技术、Serverless 等技术的广泛应用。云原生中间件最大的技术特点就是中间件技术从业务进程中分离，变成与开发语言无关的普惠技术，只与应用自身架构和采用的技术标准有关。

微服务架构一般包含下列组件：服务注册发现中心、配置中心、服务治理、服务网格、API 管理、运行时监控、 链路跟踪等。随着 Kubernetes 的流行，Kubernetes 提供的基础部署运维和弹性伸缩能力已经可以满足多数中小 企业的微服务运维要求。**微服务与 Kubernetes 集成会是一个大趋势。**

服务注册发现和配置中心的功能主要致力于解决微服务在分布式场景下的服务发现和分布式配置管理两个核心问题。随着云原生技术的发展，服务发现领域出现了两个趋势，一个是服务发现标准化（Istio），一个是服务下沉 (CoreDNS)；配置管理领域也有两个趋势，一个是标准化（ConfigMap），一个是安全 (Secret)。

提到事件驱动就必须先讲消息服务，消息服务是云计算 PaaS 领域的基础设施之一，主要用于解决分布式应 用的异步通信、解耦、削峰填谷等场景。消息服务提供一种 BaaS 化的消息使用模式，用户无需预先购买服务器 和自行搭建消息队列，也无需预先评估消息使用容量，只需要在云平台开通即用，按消息使用量收费。

事件驱动架构：由于 IoT、云计算技术的快速发展，事件驱动架构在未来将会被越来越多的企业采纳，通过事件的抽象、异步化，来提供业务解耦、加快业务迭代。在过去事件驱动架构往往是通过消息中间件来实现，事件用 消息来传递。

# 4. 阿里巴巴云原生架构设计

ACNA（Alibaba Cloud Native Architecting）架构设计方法。ACNA 是一个 「4+1」 的架构设计流程，「4」 代表架构设计的关键视角，包括企业战略视角、业 务发展视角、组织能力视角和云原生技术架构视角；「1」 表示云原生架构的架构持续演进闭环。示例图如下（非常高屋建瓴的感觉）：

![](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/321/1596444452803-eb8b87df-6659-4d5a-a080-e1f298bbd163.png)

# 5. 阿里巴巴云原生产品介绍

阿里巴巴云原生产品家族包括容器产品家族、微服务产品家族、Serverless 产品家族、Service Mesh 产品家族、消息产品、云原生数据库家族、云原生大数据产品家族等。大图如下（进入广告时间）：

![](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/321/1596444599636-5772db4e-02a1-48c2-be86-2d7263f750aa.png)

# 6. 各个行业面临的挑战及解决方案

不同行业采用阿里云的云原生技术、云原生架构，助力企业的技术创新和企业的数字化转型。

给了几个例子：申通（物流）、完美日记（电商）、特步（零售）、中国联通（通信）、Timing App（App）。

# 7. 云原生架构未来发展趋势

## 3.1 容器技术发展趋势

- 趋势一：无处不在的计算催生新一代容器实现（强调安全可信、跨平台）
- 趋势二：云原生操作系统开始浮现（Kubernetes 已经成为云时代的操作系统。）

传统意义的操作系统和云原生操作系统的对比：

![](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/321/1596445198391-9fcef129-b4e0-43cd-8cdf-33e192281fc3.png)

- 趋势三： Serverless 容器技术逐渐成为市场主流
- 趋势四：动态、混合、分布式的云环境将成为新常态

## 3.2 基于云原生的新一代应用编程界面

Kubenetes 已经成为了云原生的操作系统，而容器成为了操作系统调度的基本单元，同时定义了应用交付的标准。但是对于应用开发者来说，这些还远没有深入到应用的架构，改变应用的编程界面。

几个主要的变革：

- Sidecar 架构彻底改变了应用的运维架构。

- 应用生命周期全面托管。

- 用声明式配置方式使用云服务。

- 语言无关的分布式编程框架成为一种服务。

包括生命周期管理、运维管理、配置范围和扩展和管理、以及语言无关的编程框架，一起构成了崭新的应用与云之间的编程界面。

## 3.3 Serverless 发展趋势

- 趋势一：Serverless 将无处不在。

- 趋势二：Serverless 将通过事件驱动的方式连接云及其生态中的一切。

- 趋势三：Serverless 计算将持续提高计算密度，实现最佳的性能功耗比和性能价格比。
