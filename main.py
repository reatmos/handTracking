import threading

def socket01():
    from trackingSocket import app01
    app01.run(host='0.0.0.0', port=5000)

def socket02():
    from textSocket import app02
    app02.run(host='0.0.0.0', port=5001)

if __name__ == '__main__':
    t1 = threading.Thread(target=socket01)
    t2 = threading.Thread(target=socket02)

    t1.start()
    t2.start()

    t1.join()
    t2.join()