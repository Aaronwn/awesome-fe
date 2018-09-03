# git

>

::: tip git备忘
记录一些常用的git操作，方便需要时查找。
:::

## Git切换远程仓库地址

- 修改命令
```bash
git remote set-url origin [url]
```

- 先删后加
```bash
git remote rm origin 或 git remote remove origin
git remote add origin [url]
```
## Git仓库删除历史commit记录
```bash
1.checkout
  git checkout --orphan newbranch  
2.add all files
  git add .
3.commit the change
  git commit -am 'commit message'
4.delete master branch
  git branch -D master
5.rename the current branch to master
  git branch -m master
6.finally,force update your repository
  git push -f origin master
```

## Git pull 提示未关联远程仓库历史历史记录





