CREATE TABLE EXPENSE (
    ID NUMBER PRIMARY KEY,
    NAME VARCHAR(75) NOT NULL,
    CATEGORY_ID NUMBER NOT NULL,
    BUCKET_ID NUMBER NOT NULL,
    USER_ID NUMBER NOT NULL,
    DUE_DATE DATE NOT NULL,
    PAYMENT_DATE DATE NOT NULL,
    VALUE FLOAT NOT NULL
);

ALTER TABLE EXPENSE
    ADD CONSTRAINT FK_CATEGORY_ID_EXPENSE
    FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORY(ID);

ALTER TABLE EXPENSE
    ADD CONSTRAINT FK_BUCKET_ID_EXPENSE
    FOREIGN KEY (BUCKET_ID) REFERENCES BUCKET(ID);

ALTER TABLE EXPENSE
    ADD CONSTRAINT FK_USER_ID_EXPENSE
    FOREIGN KEY (USER_ID) REFERENCES USER(ID);