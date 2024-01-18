CREATE TABLE REVENUE (
    ID NUMBER PRIMARY KEY,
    NAME VARCHAR(75) NOT NULL,
    RECEIVE_DATE DATE NOT NULL,
    BUCKET_ID NUMBER NOT NULL,
    USER_ID NUMBER NOT NULL,
    VALUE FLOAT NOT NULL
);

ALTER TABLE REVENUE
    ADD CONSTRAINT FK_BUCKET_ID_REVENUE
    FOREIGN KEY (BUCKET_ID) REFERENCES BUCKET(ID);

ALTER TABLE REVENUE
    ADD CONSTRAINT FK_USER_ID_REVENUE
    FOREIGN KEY (USER_ID) REFERENCES USER(ID);