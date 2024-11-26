# Sign language recognition with Mediapipe and KNN algorithm



https://github.com/user-attachments/assets/76c1c175-5b67-409f-87ab-1cf48a288d56



====================

## How to Run
- Run main.py and check in service.html

[Optional]
- To run camera separately, uncomment the following code in `if view_img:` in handTracking.py, comment out `yield im0`, specify source in `if __name__ == '__main__':`, and execute

```
  cv2.imshow(str(p), im0) # show image (frame)
  if cv2.waitKey(1) == ord('q'): # press q to exit
    cv2.destroyAllWindows()
  break
```

====================

## Notes
- [Original Code](https://developeralice.tistory.com/12)
