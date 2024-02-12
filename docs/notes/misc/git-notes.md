# Git Notes

## 設定 Git
- `git config --global user.name "<GitHub Username>"`：設定全域使用者名稱 ( 同 GitHub 的就好 )
- `git config --global user.email "<GitHub email>"`：設定全域使用者信箱 ( 同 GitHub 的就好 )

## Git 基礎常用命令
### 一般操作
- `git clone <GitHub url>`：把整個專案複製一份下來本地並存在同名的目錄裡
    > 所有整個專案的歷史紀錄、分支、標籤等內容都會複製一份下來
    > 最後可以再加參數指定存放位置 ( 可以順便改名 )
- `git init`：在當前目錄下初始化出一個空的本地儲存庫
- `git remote add origin <GitHub url>`：設定端節的節點
- `git status`：查看當前工作區與暫存區狀態
- `git log`：查看當前本地儲存庫的 commit 紀錄
- `git log --oneline` 用一行查看當前本地儲存庫的 commit 紀錄
- `git reflog`：查看過去 HEAD 指向過去的 commit 清單
- `git stash list`：查看目前的 Stash ( 可以放很多份 )
    > WIP 字樣是「Work In Progress」就是工作進行中的意思
- `git remote`：顯示已經設定好的遠端版本庫
- `git remote -v`：**更詳細**地顯示已經設定好的遠端版本庫
- `git branch --remote`：顯示遠端的分支

### 檔案處理
- `git add <file name>`：將 `<file name>` 的變更放入暫存區
- `git commit -m "<message>"`：將當前暫存區中的所有變更打包成一個版本，並附加版本敘述訊息，紀錄進本地儲存庫
- `git checkout <file name>`：放棄在工作區中名為 `<file name>` 檔案的所有變更
- `git push <remote> <branch>`：將本地儲存庫的狀態推到遠端儲存庫
    > 通常 `<remote>` 都是 `origin`
- `git push -u <remote> <branch>`：將本地儲存庫的狀態推到遠端儲存庫
    > `-u` 為將此指令設為預設，可縮寫為 `git push`
- `git fetch`：本地更新遠端儲存庫的狀態，但遠端被刪除的本地**不會**跟著刪除
    > 如果遠端有新分支必須 fetch 才能 pull
- `git fetch -p`：本地更新遠端儲存庫的狀態，遠端被刪除的本地**會**跟著刪除
- `git fetch <remote>`：視狀況要不要指定 `<remote>` ( 可能設定兩個以上 )
- `git pull <remote> <branch>`：將遠端儲存庫的狀態拉到本地儲存庫
    > git pull = git fetch + git merge
- `git pull --rebase`： Fetch 完成之後，便會使用 Rebase 方式進行合併
    > 如果不想要 merge 時額外產生的 Commit，可考慮使用 Rebase 方式來進行合併
    > 如果線上版本的內容比本地還要新，Git 不讓你推上去時可用此方法 ( 先拉再推 )
- `git push -f`：強迫硬推上去，把遠端更新的內容蓋掉
    > 如果線上版本的內容比本地還要新，Git 不讓你推上去時可用此方法
    > 但是線上版本更新的部分將會被蓋掉！
- `git reset`：將暫存區變更退回工作區
- `git reset [--mixed/--soft/--hard] <commit>`：挪動本地儲存庫 HEAD 指向的位置
    - `mixed`：將指向位置相對未來紀錄的變更退回**工作區**
    - `soft`：將指向位置相對未來紀錄的變更退回**暫存區**
    - `hard`：將指向位置相對未來紀錄的變更**刪除** ( 還有救 )
- `git revert <commit>`：將指定的 commit 做反向操作並留下一筆紀錄
    > 被指定的 commit 的變更紀錄將會消失，但 commit 仍存在，
    > 因為它是透過新增一個 commit 去反向操作將這些變更部分刪除
    > * 如果反悔，可以再開一個新的 Revert，來 Revert 剛剛這個 Revert
    > * 如果是要砍掉這個 Revert，直接使用 Reset 指令
#### cherry-pick
- `git cherry-pick <commit hash value>...`：撿其他的分支的 Commit 過來跟現分支合併
- `git cherry-pick <commit hash value> --no-commit`：撿過來的 Commit 不會直接合併，而是會先放在暫存區
#### stash
- `git stash`：把目前的修改先暫存起來
- `git stash pop <stash>`：把某個 Stash 拿出來並套用在目前的分支上
    > 套用成功之後，那個套用過的 Stash 就會被刪除
    > * 如果後面沒有指定 Stash，預設為最後疊上去的那個
- `git stash drop <stash>`：把這個 Stash 從列表裡刪掉
- `git stash apply <stash>`：把這個 Stash 拿來套用在現在的分支上並不刪除

### 分支處理
- `git branch <branch name>`：創建名為 `<branch name>` 的分支
- `git branch -D <branch name>`：刪除名為 `<branch name>` 的分支
- `git branch -m <branch name> <new branch name>`：更改分支的名稱
- `git checkout <branch name>`：切換到名為 `<branch name>` 的分支 ( 最新的 Commit )
- `git checkout -b <branch name>`：創建並切換到名為 `<branch name>` 的分支
- `git branch <branch name> <commit hash value>`：建立一個 `<branch name>` 分支指向 `<commit hash value>` 這個 Commit 
- `git merge <target branch>`：將名為 `<target branch>` 的 分支合併到當前所在的分支
- `git rebase <source branch>`：將當前所在的分支的根節點挪到名為 `<source branch>` 的分支葉節點上
- `git branch <new branch name> <commit hash value>`：尚未合併的分支被刪除後可透過建立一個新的的分支，讓它指向原分支上 `<commit hash value>` 這個 Commit
- `git checkout -t <remote branch>`：切換到遠端分支 `<remote branch name>` 而不呈現 detached HEAD 狀態
    > `-t` 或 `--track` 都可以
    > 指會在本機建立一個名為追蹤分支（tracking branch）的東西
- `git remote add upstream <GitHub url>`：加上另一個遠端節點 ( 通常是 Fork 時原作的專案 )
- `git push <remote> :<remote branch>`：刪除遠端分支
:::danger 注意
分支只是一個指向某個 Commit 的指標！
:::

### 合併衝突
- `git reset <commit hash value> --hard`：取消 rebase，選擇 rebase 前的最後動作的 Commit 的雜湊值
- `git reset ORIG_HEAD --hard`：取消 rebase，ORIG_HEAD 會記錄「危險操作」之前 HEAD 的位置
- `git rebase --continue`：若 rebase 發生衝突，檔案修正後繼續 rebase
- `git rebase --abort`：若 rebase 發生衝突，放棄這次的 rebase
- `git checkout --ours <image>`：若是圖片之類的檔案產生衝突，決定使用當前分支的檔案
- `git checkout --theirs <image>`：若是圖片之類的檔案產生衝突，決定使用對方分支的檔案

### 互動模式
- `git rebase -i <commit hash value>`：`-i` 參數是指要進入 Rebase 指令的「互動模式」，而後面的 `<commit hash value>` 是指這次的 Rebase 指令的應用範圍會「從現在到 `<commit hash value>` 這個 Commit」，這個指令會跳出一個 Vim 編輯器。
:::warning
請注意 Commit 的順序！
:::
```
Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
```

> **修改 Commit 順序**
> 只要將內容順序做變換就好 ( 越新的 Commit 在越下面 )

> **刪除 Commit** 
> 把原本的 `pick` 改成 `drop`，或甚至直接把那行刪掉
#### pick & reword 
> 更改 Commit 訊息
1. 前面的 `pick` 的意思是保留這次的 Commit，不做修改
1. 將`pick` 改成 `reword` 表示修改此 Commit 的訊息
1. 存檔並離開之後，立馬就會再跳另一個 Vim 編輯器畫面去編輯 Commit 訊息內容
2. 被更改的 Commit 根本就是全新的 Commit ( 雜湊值已更新 )
3. 在它之後的 Commit 會因為前面的歷史改了，所以後面整串的 Commit 全部都重新做出新的 Commit 出來替代舊的 Commit
#### squash
> 將多筆 Commit 紀錄合併
1. 將`pick` 改成 `squash` 表示將此 Commit 併到前一個 Commit
2. 存檔並離開 Vim 編輯器後，它會開始進行 Rebase
3. 而在 Squash 的過程中，它還會跳出 Vim 編輯器讓你編輯一下 Commit 訊息
#### edit 
> 將單筆 Commit 拆成多筆 Commit
1. 將`pick` 改成 `edit` 表示將對此 Commit 停留做修改 ( HEAD 會指向此 commit )
1. `git reset HEAD^` reset 回到上一個 Commit，並將原本的變更退回工作區
1. 重新 `add` 和 `commit` 
1. `git rebase --continue` 完成後要記得讓 Rebase 繼續跑完
> 在某些 Commit 之間再增加一些其它的 Commit
1. 將`pick` 改成 `edit` 表示將對此較舊的 Commit 停留做修改 ( HEAD 會指向此 commit )
1. 新增需要的 commit
1. `git rebase --continue` 繼續剛剛中斷的 Rebase 

## [Git Flow](https://github.com/nvie/gitflow)
### 長期分支
* `master`
  > 主要用來放穩定、隨時可上線的版本。<br>
  > 這個分支的來源只能從別的分支合併過來，開發者不會直接 Commit 到這個分支。<br>
  > 因為是穩定版本，所以通常會在這個分支上的 Commit 上打上版本號標籤。
* `develop`
  > 主要是所有開發的基礎分支。<br>
  > 要新增功能時，所有的 `feature` 分支都是從這個分支切出去的。<br>
  > 而 `feature` 分支的功能完成後，也都會合併回來這個分支。
### 短期分支
* `hotfix`
  > 當線上產品發生緊急問題的時候，會從 `master` 分支開一個 `hotfix` 分支出來進行修復。<br>
  > `hotfix` 分支修復完成之後，會合併回 `master` 分支，也同時會合併一份到 `develop` 分支。

:::warning 為什麼要合併回 `develop` 分支？
如果不這麼做，等到 `develop` 分支完成並且合併回 `master` 分支的時候，問題再次出現了。
:::
:::warning 為什麼不直接從 `develop` 分支切出來修？
因為 `develop` 分支的功能可能尚在開發中，這時候硬是要從這裡切出去修再合併回 `master` 分支，只會造成更大的災難。
:::

* `release`
  > 當認為 `develop` 分支足夠成熟了，就可以把 `develop` 分支合併到 `release` 分支，在這邊進行算是上線前的最後測試。<br>
  > 測試完成後，`release` 分支將會同時合併到 `master` 以及 `develop` 這兩個分支上。<br>
  > `master` 分支是上線版本，而合併回 `develop` 分支的目的是因為可能在 `release` 分支上還會測到並修正一些問題，所以需要跟 `develop` 分支同步，免得之後的版本又再度出現同樣的問題。
* `feature`
  > 需要新增功能時就是使用 `feature` 分支。<br>
  > `feature` 分支都是從 `develop` 分支來的，完成之後會再併回 `develop` 分支。

## Commit 提交描述
- `feat`：新功能
- `fix`：修復 bug
- `docs`：文件
- `style`：coding style 的調整，例如：空白、分號、空格等，不影響程式碼的內容
- `refactor`：重構現有程式碼，不屬於新增新功能或是修 bug
- `perf`：提升效能的改進
- `test`：新增或修改測試
- `build`：和打包或外部依賴相關的修改，例如：npm、gulp、broccoli
- `ci`：與 CI 設定檔或 script 相關的修改，例如：Travis、Circle、BrowserStack、SauceLabs
- `chore`：其他，並且也不會修改原始碼或是測試，例如：storybook 的新增或變更
- `revert`：回復前一個提交的 commit


## 其他技巧
* [超精簡 Vim 操作介紹](https://gitbook.tw/chapters/command-line/vim-introduction.html)
* [設定 Git 指令縮寫](https://gitbook.tw/chapters/config/convenient-settings.html)
* [空的目錄無法被提交](https://gitbook.tw/chapters/using-git/add-folder-to-git.html)
* [查詢 Commit 內容、檔案或作者](https://gitbook.tw/chapters/using-git/log.html)
* [檔案不想放在 Git 裡面一起備份](https://gitbook.tw/chapters/using-git/ignore.html)
* [退回相對的 Commit 紀錄](https://gitbook.tw/chapters/using-git/reset-commit.html)
* [使用標籤 貼在 Commit 上](https://gitbook.tw/chapters/tag/using-tag.html)
* [filter-branch | 一次大量的修改 Commit](https://gitbook.tw/chapters/faq/remove-sensitive-data.html)
* [把檔案真正的從 Git 裡移掉](https://gitbook.tw/chapters/faq/remove-files-from-git.html)
* [detached HEAD | HEAD 沒有指到某個分支](https://gitbook.tw/chapters/faq/detached-head.html)
* [Push 上傳到 GitHub | SSH Key 的建立與設定](https://gitbook.tw/chapters/github/push-to-github.html)
* [製作更新檔 ( Patch )](https://gitbook.tw/chapters/github/patch.html)

## 來源參考
[⋯ Git 基礎筆記](https://hackmd.io/@DevilTea/Sy4fZo0-S)
<span style="margin-right: 0.5rem;"></span>
[⋯ 為你自己學 Git](https://gitbook.tw/)