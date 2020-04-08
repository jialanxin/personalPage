<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{title}}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="font-weight-light">latest update: {{lastUpdate}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>在其他网站上看到一张Git速查表，不好导出保存，所以重新写一遍。</p>
        <v-treeview :items="items" :open="open">
          <template v-slot:label="{item}">
            <span v-html="item.name"></span>
          </template>
        </v-treeview>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import json from "../posts.json";
export default {
  data() {
    return {
      title: "Git速查表",
      lastUpdate: "",
      open: [],
      items: [
        {
          id: 1,
          name: "代码仓库",
          children: [
            {
              id: 2,
              name: "创建仓库",
              children: [
                {
                  id: 3,
                  name: "1.进入需要创建代码库的文件夹 <kbd>cd 文件路径</kbd>"
                },
                { id: 4, name: "2.创建/初始化仓库 <kbd>git init</kbd>" },
                { id: 5, name: "3.拉取远程仓库到本地 <kbd>git clone</kbd>" },
                { id: 6, name: "建议使用<kbd>git clone</kbd>" }
              ]
            },
            {
              id: 7,
              name: "添加文件到仓库",
              children: [
                {
                  id: 8,
                  name: "1.添加文件到暂存区",
                  children: [
                    { id: 9, name: "添加单个文件 <kbd>git add 文件名</kbd>" },
                    { id: 10, name: "添加所有文件 <kbd>git add .</kbd>" },
                    {
                      id: 11,
                      name: "会忽略<code>.gitinore</code>中的文件 以及 空目录"
                    }
                  ]
                },
                {
                  id: 12,
                  name: "2.提交到本地仓库",
                  children: [
                    {
                      id: 13,
                      name: "<kbd>git commit</kbd>",
                      children: [
                        { id: 14, name: "填写commit message" },
                        { id: 15, name: "保存" }
                      ]
                    },
                    {
                      id: 16,
                      name:
                        '不建议使用<kbd>git commit -m "commit message"</kbd>'
                    },
                    { id: 17, name: "提交要遵循commit message的规范" }
                  ]
                },
                { id: 18, name: "3.查看工作区状态 <kbd>git status</kbd>" },
                { id: 19, name: "4.对比工作区文件变化 <kbd>git diff</kbd>" }
              ]
            },
            {
              id: 20,
              name: "仓库配置",
              children: [
                {
                  id: 21,
                  name: "1.配置全局用户名和邮箱",
                  children: [
                    {
                      id: 22,
                      name: "<kbd>git config --global user.name 用户名</kbd>"
                    },
                    {
                      id: 23,
                      name: "<kbd>git config --global user.email 邮箱</kbd>"
                    }
                  ]
                },
                {
                  id: 24,
                  name: "2.配置当前仓库用户名和邮箱",
                  children: [
                    { id: 25, name: "<kbd>git config user.name 用户名</kbd>" },
                    { id: 26, name: "<kbd>git config user.email 邮箱</kbd>" }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 27,
          name: "代码版本/提交切换",
          children: [
            {
              id: 28,
              name: "查看不同版本/提交",
              children: [
                { id: 29, name: "1.提交详情 <kbd>git log</kbd>" },
                { id: 30, name: "2.提交简介 <kbd>git log --oneline</kbd>" }
              ]
            },
            {
              id: 31,
              name: "回退版本/提交",
              children: [
                {
                  id: 32,
                  name: "1.回退到当前最新提交 <kbd>git reset --hard HEAD</kbd>"
                },
                {
                  id: 33,
                  name: "2.回退到上次提交 <kbd>git reset --hard HEAD^</kbd>"
                },
                {
                  id: 34,
                  name: "3.回退到上n次提交 <kbd>git reset --hard HRAD~n</kbd>"
                },
                {
                  id: 35,
                  name: "4.回退到某次提交 <kbd>git reset --hard commitid</kbd>"
                }
              ]
            },
            {
              id: 36,
              name: "重返未来版本",
              children: [
                {
                  id: 37,
                  name: "1.查看历史提交以及被退回的提交 <kbd>git reflog</kbd>"
                },
                {
                  id: 38,
                  name: "2.回到未来版本 <kbd>git commit --hard commitid</kbd>"
                }
              ]
            },
            {
              id: 39,
              name: "撤销修改",
              children: [
                {
                  id: 40,
                  name: "1.工作区内的撤销 <kbd>git checkout 文件名</kbd>"
                },
                {
                  id: 41,
                  name: "2.暂存区内的撤销",
                  children: [
                    {
                      id: 42,
                      name:
                        "从暂存区回退到工作区 <kbd>git reset HEAD 文件</kbd>"
                    },
                    { id: 43, name: "撤销修改 <kbd>git checkout 文件名</kbd>" }
                  ]
                },
                { id: 44, name: "提交到了版本库->参见回退版本/提交" }
              ]
            },
            {
              id: 45,
              name: "删除文件",
              children: [
                {
                  id: 46,
                  name:
                    "从版本库删除文件 <kbd>git rm 文件名</kbd>（等价于<kbd>rm 文件 && git add 文件</kbd>）,删除后需要<kbd>git commit</kbd>提交"
                },
                { id: 47, name: "撤销删除 同 撤销修改" },
                {
                  id: 48,
                  name:
                    "从版本库中删除文件，但本地不删除 <kbd>git rm --cached 文件名</kbd>"
                }
              ]
            },
            { id: 49, name: "重命名文件/文件夹 <kbd>git mv</kbd>" },
            { id: 50, name: "工作现场暂存 同 分支-工作现场暂存" },
            { id: 51, name: "忽略文件 <code>.gitignore</code>文件" }
          ]
        },
        {
          id: 52,
          name: "分支",
          children: [
            {
              id: 53,
              name: "创建与合并分支",
              children: [
                {
                  id: 54,
                  name: "1.创建分支",
                  children: [
                    { id: 55, name: "仅创建", cmd: "git branch 分支名" },
                    {
                      id: 56,
                      name: "创建并切换",
                      cmd: "git checkout -b 分支名"
                    }
                  ]
                },
                { id: 57, name: "2.切换分支 <kbd>git checkout 分支名</kbd>" },
                {
                  id: 58,
                  name: "3.合并分支",
                  children: [
                    {
                      id: 59,
                      name:
                        "合并某分支到当前分支，并禁用fast forward <kbd>git merge --no-ff 分支名</kbd>"
                    },

                    { id: 60, name: "不建议使用变基 <kbd>git rebase</kbd>" },
                    {
                      id: 93,
                      name:
                        "合并commit信息混乱的分支，合并前建议先变基 <kbd>git merge --squash 分支名</kbd>"
                    }
                  ]
                },
                {
                  id: 61,
                  name: "4.删除分支",
                  children: [
                    {
                      id: 62,
                      name: "删除本地分支",
                      children: [
                        {
                          id: 63,
                          name: "删除未合并分支 <kbd>git branch -D 分支名</kbd>"
                        },
                        {
                          id: 64,
                          name: "删除已合并分支 <kbd>git branch -d 分支名</kbd>"
                        }
                      ]
                    },
                    {
                      id: 65,
                      name:
                        "删除远程分支（建议界面操作）<kbd>git push origin -d 分支名</kbd>"
                    },
                    {
                      id: 94,
                      name:
                        "删除远程分支后的删除本地分支 <kbd>git fetch -p</kbd>"
                    }
                  ]
                },
                {
                  id: 66,
                  name: "5.查看分支",
                  children: [
                    { id: 67, name: "查看当前分支 <kbd>git branch</kbd>" },
                    { id: 68, name: "查看所有分支 <kbd>git branch -a</kbd>" }
                  ]
                },
                {
                  id: 69,
                  name: "合并分支，解决分支冲突",
                  children: [
                    { id: 70, name: "将要合并的分支更新到最新" },
                    { id: 71, name: "切换到主分支" },
                    { id: 72, name: "合并分支" },
                    { id: 73, name: "解决冲突" },
                    { id: 74, name: "暂存并提交到版本库" },
                    {
                      id: 75,
                      name: "查看分支状态 <kbd>git log --graph --oneline</kbd>"
                    }
                  ]
                }
              ]
            },
            {
              id: 76,
              name: "工作现场暂存",
              children: [
                { id: 77, name: "1.暂存工作现场 <kbd>git stash</kbd>" },
                {
                  id: 78,
                  name: "2.恢复工作现场",
                  children: [
                    { id: 79, name: "恢复 <kbd>git stash apply</kbd>" },
                    { id: 80, name: "删除 <kbd>git stash drop</kbd>" },
                    {
                      id: 81,
                      name:
                        "恢复到工作区内并删除储藏区 <kbd>git stash pop</kbd>"
                    }
                  ]
                }
              ]
            },
            {
              id: 82,
              name: "多人协作",
              children: [
                {
                  id: 83,
                  name: "1.查看远程库信息 <kbd>git remote</kbd>（-v 更详细）"
                },
                {
                  id: 84,
                  name: "2.更新/推送远程库",
                  children: [
                    { id: 85, name: "更新远程库信息 <kbd>git fetch</kbd>" },
                    {
                      id: 86,
                      name:
                        "远程库更新到本地 <kbd>git pull</kbd>（等价于 fetch + merge）"
                    },
                    {
                      id: 87,
                      name:
                        "本地分支推送到远程库 <kbd>git push origin 分支名</kbd>"
                    }
                  ]
                },
                {
                  id: 88,
                  name: "本地分支和远程分支交互",
                  children: [
                    {
                      id: 89,
                      name:
                        "使用远程分支A创建本地分支 <kbd>git checkout -b A origin/A</kbd>"
                    },
                    {
                      id: 90,
                      name:
                        "将本地分支与远程分支关联 <kbd>git branch --set-upstream A origin/A</kbd>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 91, name: "代码版本tag" },
        { id: 92, name: "其他生僻命令" }
      ]
    };
  },
  created() {
    this.lastUpdate = json.find(post => {
      return post.title === this.title;
    }).lastUpdate;
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>