<template>
    <div class="total">
        <div  class="codeTake"> 排队取号</div>
        <div class="callTake">
            <div class="callYou">听到叫号请到店内就餐，过号自动取消排队</div>
        </div>
        <div class="chooseDesk">
            <div class="deskTop">请选择桌型</div>
            <div class="deskDetail">
                <ul>
                    <li class="small">
                        <div class="smallDesk">
                            <div>小桌</div>
                            <div >1-2人</div>
                        </div>
                        <div>等待<span class="person">2</span>桌</div>
                        <div>约20分钟</div>
                    </li>
                    <li class="small">
                        <div class="smallDesk">
                            <div class="smallDeskOne">中桌</div>
                            <div>3-4人</div>
                        </div>
                        <div>等待<span  class="person">1</span>桌</div>
                        <div>约10分钟</div>
                    </li>
                    <li class="small">
                        <div class="smallDesk">
                            <div>大桌</div>
                            <div >5-8人</div>
                        </div>
                        <div>等待<span class="person">1</span>桌</div>
                        <div>约10分钟</div>
                    </li>
                    <li class="small">
                        <div class="smallDesk">
                            <div>特大桌</div>
                            <div >9-16人</div>
                        </div>
                        <div>等待<span class="person">1</span>桌</div>
                        <div>约10分钟</div>
                    </li>

                </ul>
            </div>
        </div>
        <!-- 取号 -->
        <div class="takeNow">
            <div class="taking">立即取号</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .codeTake{
        text-align: center;
        font-size: 24px;
        margin-top: 10px;
        width: 100%;
        height: 30px;
        padding-bottom:5px;
    }
    .callTake{
        width: 100%;
        height: 100px;
        background-color: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .callYou{
        text-align: center;
        line-height: 100px;
        width: 350px;
        color: red;
        }
    .small{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    ul>li{
        padding: 20px;
        font-size: 20px;
        border: 1px solid red;
    }
    .person{
        color: red;
    }
    .deskTop{
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        padding-left: 20px;
    }
    ul{
        background-color: #F5F5F5;
    }
    .total{
        margin-bottom: 100px;
    }
    .waiting{
        margin-left: 20px;
        padding-right: 20px;
        display: flex;
        justify-content: space-between;
        width: 300px;
        height: 50px;
        line-height: 50px;
        border: 1px solid red;
        border-radius: 5px;
    }
    .reload>img{
        width: 20px;
        height: 20px;
        padding-left: 5px;
        padding-right: 5px;
        margin-top:10px;
        
    }
    .moreDetail{
        text-align: center;
        font-size: 24px;
    }
    .takeNow{
        width: 100%;
        height: 100px;
        display: flex;
        background-color: #F5F5F5;
        justify-content: center;
        align-items: center;
        text-align: center;
        overflow: hidden;
    }
    .taking{
        margin-top: 30px;
        width: 200px;
        height: 40px;
        background-color: red;
        line-height:40px;
        color: white;
        border-radius: 20px;
    }
</style>