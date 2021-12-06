<template>
    <div>
        <div class="flex-item item-2">
                <div>
                    <ul>
                        <li class="info-2">
                            <label for="name">Name:</label> <br>
                            <input type="text" name="name" placeholder="Your name" required/>
                        </li>
                        <li class="info-2">
                            <label for="email">Email:</label> <br>
                            <input type="text" name="email" placeholder="example@google.com" required/>
                        </li>
                        <li class="info-2 cover-letter">
                            <label for="coverletter">Cover Letter:</label> <br>
                            <textarea name="coverletter" id="covlet" placeholder="Write your cover letter here!" required></textarea>
                        </li>
                    </ul>
                </div>
                <div>
                    <button class="subm-but">Submit</button>
                </div>
        </div>
    </div>
</template>

<style lang="scss">

    .flex-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        //min-height: 100vh;
        justify-content: center;
        width: 80%;
        margin: 0 auto;
        //background-color: aquamarine;
        
    }

    .flex-item {
        width: 350px;
        height: 500px;
        background-color: #393E46;
        //align-self: center;
        padding-bottom: 25px;
        border-radius: 10px;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, .6);
        margin: 75px 30px 75px 30px;
        overflow: hidden;

        &.item-2 {
            padding-top: 50px;
        }
    }

    .dicpic {
        width: 150px;
        height: 150px;
        margin: 50px auto 30px;
        display: block;
        border-radius: 50%;
        padding: 4px;
        background-color: #FCEFEE;
        //border: 1px #FCEFEE;
    }

    a {
        padding: 0px;
        @extend .dicpic
    }
    
    textarea {
        height: 100px;
        width: 200px;
    }
    .info-1 {
        width: 200px;
        height: 50px;
        margin: 0px 75px 25px 75px;
        font-size: 25px;
        font-weight: 500;
        letter-spacing: 1px;
        color: #FCEFEE;
        font-family: 'Roboto', sans-serif;
    }

    .info-2 {
        height: 100px;
        margin: 0 75px 0 75px;
        list-style-type:none;
        list-style-position:outside;
        @extend .info-1;
    }

    input {
        width: 200px;
        height: 30px;
        margin-top: 5px;
    }

    textarea {
        margin-top: 5px;
        min-width: 200px;
        max-width: 200px;
        min-height: 100px;
        max-height: 100px;
    }

    .subm-but {
        border-radius: 4px;
        color:#FCEFEE;
        width: 125px;
        height: 40px;
        display: block;
        font-size: 25px;
        font-weight: 500;
        letter-spacing: 1px;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, .5);
        background-color: #393E46;
        margin: 0 auto;
        text-align: center;

        &:hover {
            background-color: #FCEFEE;
            color: #393E46;
        }
    }

    .cover-letter {
        height: 170px;;
    }

    

    @media screen and (max-width: 980px) {
        .flex-container {
            flex-direction: column;
        }
        
    }
    
</style>